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

/**
 * @param {T[]} arr
 * @param {number} len
 * @returns {T[][]}
 */
function group(arr, len) {
  const chunks = []
  const copy = arr.splice()

  while (copy.length > len) {
    chunks.push(copy.splice(0, len))
  }

  return chunks
}

$("#close-game").addEventListener("click", () => {
  $(".map").innerHTML = ""
  $(".portal").style.display = "none"
})

$("#start-game").addEventListener("click", () => {
  $(".portal").style.display = ""
  startGame()
})

function startGame() {
  const map = $(".map")
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
      const element = create("div")
      element.classList.add("map-tail-container")
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

    map.appendChild(new Comment("row"))
  }

  shuttle(tiles)

  elements.forEach((div, i) => {
    const tile = tiles[i]

    div.style.backgroundImage = tile.image
  })

  let licznikKrokow = 0
  let selectedElement = -1
  let win = false

  elements.forEach((div, i) => {
    div.addEventListener("click", () => {
      if (win) return
      if (selectedElement >= 0 && selectedElement !== i) {
        // move
        const myTile = tiles[i]
        const otherTile = tiles[selectedElement]

        elements[i].style.backgroundImage = otherTile.image
        elements[selectedElement].style.backgroundImage = myTile.image

        tiles[i] = otherTile
        tiles[selectedElement] = myTile

        elements[selectedElement].classList.remove("active")
        $("#licznik-krokow").innerText = (licznikKrokow++).toString()

        if (tiles.every((el, i) => el.index === i)) {
          win = true
          $("#wygrana").style.display = "block"
          map.style.gridGap = 0
          map.style.userSelect = "none"
        }

        selectedElement = -1
      } else {
        // select
        div.classList.add("active")
        selectedElement = i
      }
    })
  })
}
