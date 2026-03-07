async function main() {
  function getImages(data = '') {
    try {
      return JSON.parse(data).map((e) =>
        e.image.replace(
          '800x430',
          Math.random() < 0.7 ? '500x1000' : '900x430',
        ),
      )
    } catch (e) {}

    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    const items = [
      ...doc.querySelectorAll('.popup-gallery > li figure img'),
    ].map((img) => img.src)

    return items
  }

  function checkDubels(lista = []) {
    const widzianeId = new Set()
    let ostatnieId = null

    const duble = lista.filter((obj, index) => {
      const aktualne = obj.collectionId

      if (widzianeId.has(aktualne) && aktualne !== ostatnieId) {
        console.log(
          `Błąd: collectionId "${aktualne}" powróciło po przerwie (indeks ${index})`,
        )
        return true
      }

      const czyZostawic = index === 0 || aktualne !== ostatnieId

      widzianeId.add(aktualne)
      ostatnieId = aktualne

      return false
    })

    console.log('Duble', duble)
  }

  let baseUrlParam = new URLSearchParams(window.location.search).get('page')

  if (baseUrlParam) {
    localStorage.setItem('galleryBaseInfo', baseUrlParam)
  } else {
    baseUrlParam =
      localStorage.getItem('galleryBaseInfo') ||
      'https://jsonplaceholder.org/posts'
  }

  // Usuń ewentualny trailing slash
  const baseUrl = baseUrlParam.replace(/\/$/, '')

  // --- 2. Pobieranie danych (Paginacja) ---
  let allImages = []
  let page = 1

  const contentDiv = document.querySelector('.content')
  const loadingIndicator = document.createElement('div')
  loadingIndicator.style.color = 'white'
  loadingIndicator.style.position = 'absolute'
  loadingIndicator.style.zIndex = '999'
  loadingIndicator.style.top = '50%'
  loadingIndicator.style.left = '50%'
  loadingIndicator.innerText = 'Ładowanie...'
  document.body.appendChild(loadingIndicator)

  let useProxy = false

  try {
    while (true) {
      let fetchUrl

      if (baseUrl.includes('placeholder')) {
        if (page > 1) break
        fetchUrl = baseUrl
      } else {
        fetchUrl = `${baseUrl}/sort/latest/mpage/${page}`
      }

      console.log(`Pobieranie: ${fetchUrl}`, { useProxy })

      let response
      if (useProxy) {
        response = await fetch(
          'https://corsproxy.io/?' + encodeURIComponent(fetchUrl),
        )
      } else {
        try {
          console.log({ fetchUrl })

          if (window.fetchSimple) {
            response = await window
              .fetchSimple(fetchUrl)
              .then((t) => ({ ok: true, text: () => Promise.resolve(t) }))
          } else {
            response = await fetch(fetchUrl)
          }
        } catch (e) {
          console.warn(
            'Błąd bezpośredniego pobierania (CORS?), przełączam na proxy.',
            e,
          )

          console.log({ e })
          useProxy = true
          continue
        }
      }

      if (!response.ok) {
        console.warn(
          `Nie można pobrać strony ${page}, status: ${response.status}`,
          response,
        )
        break
      }

      const data = await response.text()

      const dataImages = getImages(data)

      const pageImages = dataImages.map((src, index) => {
        // DEMO: Jeśli URL nie zawiera struktury katalogów, dodajemy sztuczną,
        // grupując np. po 10 zdjęć do jednej "kolekcji"
        if (!src.includes('/content/')) {
          const fakeCollectionId =
            Math.floor(allImages.length / 10 + index / 10) + 1
          src = src + `?fake_path=/content/${fakeCollectionId}/img.png`
        }

        return src
      })

      allImages = allImages.concat(pageImages)

      if (dataImages.length < 100 || page > 100) {
        break
      }
      page++
    }
  } catch (err) {
    console.error('Błąd pobierania:', err)
    contentDiv.innerHTML =
      '<div style="color:white; display:flex; justify-content:center; align-items:center; height:100vh; font-size: 2rem;">Błąd pobierania.</div>'
  } finally {
    loadingIndicator.remove()
  }

  if (allImages.length === 0) {
    contentDiv.innerHTML =
      '<div style="color:white; display:flex; justify-content:center; align-items:center; height:100vh; font-size: 2rem;">Brak obrazków do wyświetlenia.</div>'
    return
  }

  let collectionsMap = []

  let enrichedImages = allImages.map((src, globalIndex) => {
    const collectionId = src
      .replace(/-[0-9]+\.[a-z0-9]+$/i, '')
      .split('/content/')[1]

    if (!collectionsMap.includes(collectionId)) {
      collectionsMap.push(collectionId)
    }

    return { src, collectionId, globalIndex }
  })

  checkDubels(enrichedImages)

  console.log({ collectionsMap, allImages, enrichedImages })

  enrichedImages.forEach((img) => {
    const siblings = enrichedImages.filter(
      (i) => i.collectionId === img.collectionId,
    )
    img.collectionIndex =
      siblings.findIndex((s) => s.globalIndex === img.globalIndex) + 1
    img.collectionTotal = siblings.length

    img.collectionGlobalOrder = collectionsMap.indexOf(img.collectionId) + 1
  })

  let imgs = []
  function render() {
    contentDiv.innerHTML = enrichedImages
      .map(
        (img, i) =>
          `<img src="${img.src}" loading="lazy" class="${i === 0 ? 'active' : ''}" />`,
      )
      .join('')
    imgs = document.querySelectorAll('.content img')
  }
  render()

  const speeds = [2, 5, 10, 20]
  let currentIndex = parseInt(localStorage.getItem('galleryIndex')) || 0
  let speed = parseInt(localStorage.getItem('gallerySpeed')) || 1000 * speeds[1]
  let intervalId = null
  let isPaused = false

  if (currentIndex >= imgs.length) currentIndex = 0

  function showSlide(index) {
    imgs.forEach((img) => img.classList.remove('active'))

    if (index >= imgs.length) index = 0
    if (index < 0) index = imgs.length - 1

    currentIndex = index
    imgs[currentIndex].classList.add('active')
    localStorage.setItem('galleryIndex', currentIndex)

    updateCounter()
  }

  function nextSlide() {
    showSlide(currentIndex + 1)
  }
  function prevSlide() {
    showSlide(currentIndex - 1)
  }

  function nextCollection() {
    const cleanCurrentImg = enrichedImages[currentIndex]
    const nextImg = enrichedImages.find(
      (img) =>
        img.collectionGlobalOrder > cleanCurrentImg.collectionGlobalOrder,
    )
    if (nextImg) {
      showSlide(nextImg.globalIndex)
      restartInterval()
    }
  }

  function prevCollection() {
    const cleanCurrentImg = enrichedImages[currentIndex]

    const targetCollectionOrder = cleanCurrentImg.collectionGlobalOrder - 1

    if (targetCollectionOrder > 0) {
      const targetImg = enrichedImages.find(
        (img) => img.collectionGlobalOrder === targetCollectionOrder,
      )
      if (targetImg) {
        showSlide(targetImg.globalIndex)
        restartInterval()
      }
    }
  }

  function restartInterval() {
    if (intervalId) clearInterval(intervalId)
    if (!isPaused) {
      intervalId = setInterval(nextSlide, speed)
    }
  }

  function shuffleCollections() {
    for (let i = collectionsMap.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[collectionsMap[i], collectionsMap[j]] = [
        collectionsMap[j],
        collectionsMap[i],
      ]
    }

    const newOrder = []
    let gIdx = 0
    collectionsMap.forEach((colId, cIdx) => {
      const colImgs = enrichedImages.filter((img) => img.collectionId === colId)
      colImgs.sort((a, b) => a.collectionIndex - b.collectionIndex)

      colImgs.forEach((img) => {
        img.globalIndex = gIdx++
        img.collectionGlobalOrder = cIdx + 1
        newOrder.push(img)
      })
    })

    enrichedImages = newOrder
    render()
    showSlide(0)
    restartInterval()
  }

  // --- 6. Eventy Dotykowe/Myszki ---
  contentDiv.addEventListener('click', () => {
    contentDiv.classList.toggle('fill-mode')
  })

  // --- 7. Panel Sterowania ---
  const controlsDiv = document.createElement('div')
  controlsDiv.className = 'controls'

  // Przycisk Random (R)
  const randomBtn = document.createElement('button')
  randomBtn.innerText = 'R'
  randomBtn.title = 'Losuj Kolekcje'
  randomBtn.style.marginBottom = '30px'
  randomBtn.onclick = () => {
    shuffleCollections()
  }
  controlsDiv.appendChild(randomBtn)

  // Panel Przewijania Zdjęć (Nowy)
  const slideControls = document.createElement('div')
  slideControls.className = 'collection-controls' // Używamy tej samej klasy co dla kolekcji dla spójności

  const prevSlideBtn = document.createElement('button')
  prevSlideBtn.innerText = '<'
  prevSlideBtn.title = 'Poprzednie zdjęcie'
  prevSlideBtn.onclick = () => {
    prevSlide()
    restartInterval()
  }

  const nextSlideBtn = document.createElement('button')
  nextSlideBtn.innerText = '>'
  nextSlideBtn.title = 'Następne zdjęcie'
  nextSlideBtn.onclick = () => {
    nextSlide()
    restartInterval()
  }

  slideControls.appendChild(prevSlideBtn)
  slideControls.appendChild(nextSlideBtn)
  controlsDiv.appendChild(slideControls)

  // Przycisk Start/Stop
  const toggleBtn = document.createElement('button')
  toggleBtn.innerText = '| |'
  toggleBtn.onclick = () => {
    isPaused = !isPaused
    toggleBtn.innerText = isPaused ? '|>' : '| |'
    restartInterval()
  }
  controlsDiv.appendChild(toggleBtn)

  // Panel Kolekcji
  const collectionControls = document.createElement('div')
  collectionControls.className = 'collection-controls'

  const prevColBtn = document.createElement('button')
  prevColBtn.innerText = '<-'
  prevColBtn.title = 'Poprzednia kolekcja'
  prevColBtn.onclick = prevCollection

  const nextColBtn = document.createElement('button')
  nextColBtn.innerText = '->'
  nextColBtn.title = 'Następna kolekcja'
  nextColBtn.onclick = nextCollection

  collectionControls.appendChild(prevColBtn)
  collectionControls.appendChild(nextColBtn)
  controlsDiv.appendChild(collectionControls)

  // Przycisk Reset
  const resetBtn = document.createElement('button')
  resetBtn.innerText = 'Reset'
  resetBtn.onclick = () => {
    showSlide(0)
    restartInterval()
  }
  controlsDiv.appendChild(resetBtn)

  // Prędkość
  const speedContainer = document.createElement('div')
  speedContainer.className = 'speed-controls'
  controlsDiv.appendChild(speedContainer)

  speeds.forEach((s) => {
    const btn = document.createElement('button')
    const ms = s * 1000
    btn.innerText = `${s}s`
    if (speed === ms) btn.classList.add('active')

    btn.onclick = () => {
      speed = ms
      localStorage.setItem('gallerySpeed', speed)
      speedContainer
        .querySelectorAll('button')
        .forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')
      restartInterval()
    }
    speedContainer.appendChild(btn)
  })

  document.body.appendChild(controlsDiv)

  // --- 8. Licznik ---
  const counterLeft = document.createElement('div')
  counterLeft.className = 'counter'
  document.body.appendChild(counterLeft)

  const counterRight = document.createElement('div')
  counterRight.className = 'counter-right'
  document.body.appendChild(counterRight)

  function updateCounter() {
    const info = enrichedImages[currentIndex]
    if (info) {
      // ZDJECIE_W_KOLEKCJI/ILOSC_ZDJEC_W_KOLEKCJI
      // KOLEKCJA/ILOSC_KOLEKCJI
      counterLeft.innerHTML = `${info.collectionIndex}/${info.collectionTotal}<br>${info.collectionGlobalOrder}/${collectionsMap.length}`
      counterRight.innerText = `${currentIndex + 1}/${enrichedImages.length}`
    }
  }

  // --- Start ---
  showSlide(0)
  restartInterval()

  await Promise.resolve()

  // --- Wake Lock: re-request when released and on visibility change ---
  let wakeLock = null

  async function requestWakeLock() {
    try {
      wakeLock = await navigator.wakeLock.request('screen')

      wakeLock.addEventListener('release', () => {
        console.log('WakeLock released — ponawiam żądanie...')
        setTimeout(requestWakeLock, 1000)
      })

      console.log('WakeLock acquired')
    } catch (err) {
      console.log(`${err.name || 'Error'}: ${err.message || err}`, err)
      setTimeout(requestWakeLock, 5000)
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      requestWakeLock()
    }
  })

  await requestWakeLock()
}

main().catch(console.error)
