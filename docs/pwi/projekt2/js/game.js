/**
 * @param {string} selektor
 * @returns {HTMLElement}
 */
function $(selektor) {
  return document.querySelector(selektor)
}

/**
 * @param {string} element
 * @returns {HTMLElement}
 */
function create(element) {
  return document.createElement(element)
}

/**
 * @param {T[]} arr
 */
function shuttle(arr) {
  arr.sort(() => Math.random() - 0.5)
}

$('#close-game').addEventListener('click', () => {
  $('.map').innerHTML = ''
  $('.portal').style.display = 'none'
})

$('#start-game').addEventListener('click', () => {
  $('.portal').style.display = ''
  startGame()
})

function startGame() {
  const map = $('.map')
  const scale = 7
  const XStart = 69,
    XEnd = 72
  const YStart = 40,
    YEnd = 43

  map.style.gridTemplateColumns = `repeat(${XEnd - XStart + 1}, 1fr)`

  /** @type {{ index: number; x: number; y: number; image: string }[]} */
  const tiles = []
  /** @type {HTMLDivElement[]} */
  const elements = []

  let index = 0

  for (let y = YStart; y <= YEnd; y++) {
    for (let x = XStart; x <= XEnd; x++) {
      const element = create('div')
      element.classList.add('map-tail-container')
      map.appendChild(element)
      elements.push(element)

      tiles.push({
        index: index,
        x: x,
        y: y,
        image: `url(https://tile.openstreetmap.org/${scale}/${x}/${y}.png)`,
      })

      index++
    }

    map.appendChild(new Comment('row'))
  }

  shuttle(tiles)

  elements.forEach((div, i) => {
    const tile = tiles[i]

    div.style.backgroundImage = tile.image
  })

  const gracze = 'AB'
  let licznikKrokow = 0
  let selectedElement = -1
  let win = false
  let gracz = 0
  let ai = false
  let aiMessage = false
  let aiWait = false

  /**
   * @param {HTMLDivElement} div
   * @param {number} i
   */
  function handleClick(div, i) {
    if (selectedElement < 0) {
      // select
      div.classList.add('active')
      selectedElement = i
      return
    }

    // move
    const myTile = tiles[i]
    const otherTile = tiles[selectedElement]

    elements[i].style.backgroundImage = otherTile.image
    elements[selectedElement].style.backgroundImage = myTile.image

    tiles[i] = otherTile
    tiles[selectedElement] = myTile

    elements[selectedElement].classList.remove('active')
    $('#licznik-krokow').innerText = (licznikKrokow++).toString()

    if (tiles.every((el, i) => el.index === i)) {
      win = true
      $('#wygrana').style.display = ''
      $('#ai-on-off').style.display = 'none'
      map.style.gridGap = 0
      map.style.userSelect = 'none'
    }

    selectedElement = -1
    gracz = 1 - gracz
    $('#gracz').innerText = gracze.charAt(gracz)

    if (ai && gracz === 1) {
      aiWait = true

      // Daję czas na odświeżenie widoku
      setTimeout(() => {
        if (!aiMessage) {
          aiMessage = true

          alert('Teraz ruch AI, poczekaj chwilę')
        }

        const ruch1 = Math.floor(Math.random() * elements.length)
        let ruch2 = Math.floor(Math.random() * (elements.length - 1))
        if (ruch2 >= ruch1) ruch2++

        setTimeout(() => {
          handleClick(elements[ruch1], ruch1)

          setTimeout(() => {
            handleClick(elements[ruch2], ruch2)

            aiWait = false
          }, Math.random() * 1000 + 500)
        }, Math.random() * 1000 + 500)
      })
    }
  }

  elements.forEach((div, i) => {
    div.addEventListener('click', () => {
      if (aiWait || win || selectedElement === i) return

      handleClick(div, i)
    })
  })

  $('#ai-on-off').addEventListener('click', () => {
    ai = !ai

    if (!ai) aiMessage = false

    if (ai && gracz === 1) {
      gracz = 0
      $('#gracz').innerText = gracze.charAt(gracz)
    }

    $('#ai-off').style.display = ai ? '' : 'none'
    $('#ai-on').style.display = ai ? 'none' : ''
  })
}
