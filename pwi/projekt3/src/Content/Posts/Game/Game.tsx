import React, { Fragment, useEffect, useState } from "react"
import { IPost, Post } from ".."
import { Portal } from "../../../Components/Portal"
import styles from "./Game.module.scss"

const gamePost: IPost = {
  id: -1,
  url: "#",
  img: "./img/puzzle.PNG",
  imgAlt: "Gra puzzle",
  title: "Gra polskie puzle",
  description:
    "Najlepsze puzle w Polsce, i nie tylko. Myślisz że znasz Polskę. 99% osób nie kończy tej gry. Bądz pierwszy! Zacznij już dziś",
}

const scale = 7
const XStart = 69
const XEnd = 72
const YStart = 40
const YEnd = 43

interface ITile {
  index: number
  x: number
  y: number
  image: string
}

export function Game() {
  const [player, setPlayer] = useState(0)
  const [iloscKrokow, setIloscKrokow] = useState(0)
  const [open, setOpen] = useState(false)
  const [win, setWin] = useState(false)
  const [ai, setAi] = useState(false)
  const [aiMessage, setAiMessage] = useState(false)
  const [aiWait, setAiWait] = useState(false)
  const [selected, setSelected] = useState(-1)

  const [tiles, setTiles] = useState<ITile[]>([])

  useEffect(() => {
    if (open) {
      const tiles: ITile[] = []
      let index = 0

      for (let y = YStart; y <= YEnd; y++) {
        for (let x = XStart; x <= XEnd; x++) {
          tiles.push({
            index,
            x,
            y,
            image: `url(https://tile.openstreetmap.org/${scale}/${x}/${y}.png)`,
          })

          index++
        }
      }

      // tiles.sort(() => Math.random() - 0.5)

      setTiles(tiles)
      setSelected(-1)
      setIloscKrokow(0)
      setWin(false)
    }
  }, [open])

  const handleClick = (index: number) => {
    console.log({ index })
    if (win || selected === index) return

    if (selected === -1) {
      setSelected(index)
      return
    }

    setSelected(-1)
    setIloscKrokow((kroki) => kroki + 1)
    setTiles((tiles) => {
      const newTiles = [...tiles]
      newTiles[selected] = tiles[index]
      newTiles[index] = tiles[selected]

      if (newTiles.every((el, i) => el.index === i)) {
        setWin(true)
      } else {
        setPlayer((player) => 1 - player)
      }

      return newTiles
    })
  }

  useEffect(() => {
    if (!aiWait && ai && player === 1) {
      setAiWait(true)

      if (!aiMessage) {
        setAiMessage(true)

        alert("Teraz ruch AI, poczekaj chwilę")
      }

      const ruch1 = Math.floor(Math.random() * tiles.length)
      let ruch2 = Math.floor(Math.random() * (tiles.length - 1))
      if (ruch2 >= ruch1) ruch2++

      setTimeout(() => {
        handleClick(ruch1)

        setTimeout(() => {
          handleClick(ruch2)

          setAiWait(false)
        }, Math.random() * 1000 + 500)
      }, Math.random() * 1000 + 500)
    }
  }, [player, ai, aiMessage, aiWait, handleClick])

  const handleAi = () => {
    setAi((a) => !a)
  }

  return (
    <>
      <Post post={gamePost} onClick={() => setOpen(true)} />

      <Portal
        title="Gra - Polskie puzle"
        open={open}
        handleClose={() => setOpen(false)}
      >
        <div
          className={styles.map}
          style={{
            gridTemplateColumns: `repeat(${XEnd - XStart + 1}, 1fr)`,
            gridGap: win ? 0 : undefined,
            userSelect: win ? "none" : undefined,
          }}
        >
          {tiles.map(({ index, x, y }, i) => (
            <div
              key={index}
              className={[
                styles.mapTailContainer,
                selected === i ? styles.active : "",
              ].join(" ")}
              style={{
                backgroundImage: `url(https://tile.openstreetmap.org/${scale}/${x}/${y}.png)`,
              }}
              onClick={() => {
                if (!aiWait) handleClick(i)
              }}
            />
          ))}
        </div>

        <p>
          Gracz {player === 0 ? "A" : "B"}. Licznik kroków: {iloscKrokow}.{" "}
          {win && "Gratulacje! Wygrana!"}
        </p>

        <button onClick={handleAi}>
          {ai ? "Zatrzymaj AI dla gracza B" : "Uruchom AI dla gracza B"}
        </button>
      </Portal>
    </>
  )
}
