import React, { Component } from "react"
import { IPost, Post } from "../Posts"
import { Portal } from "../../../Components/Portal"
import classes from "./Game.module.scss"
import {
  translate,
  Translate,
  TranslationsContext,
} from "../../../Translations"

const gamePost = (lang: string): IPost => ({
  id: -1,
  url: "#",
  img: "./img/puzzle.PNG",
  imgAlt: translate("GameTitle", lang),
  title: translate("GameTitle", lang),
  description: translate("GameDescription", lang),
})

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

function generateTiles(): ITile[] {
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

  return tiles
}

interface IState {
  player: number
  stepsCount: number
  open: boolean
  win: boolean
  ai: boolean
  aiMessage: boolean
  aiWait: boolean
  selected: number
  tiles: ITile[]
}

export class Game extends Component<{}, IState> {
  static contextType = TranslationsContext

  state: IState = {
    player: 0,
    stepsCount: 0,
    open: false,
    win: false,
    ai: false,
    aiMessage: false,
    aiWait: false,
    selected: -1,
    tiles: generateTiles(),
  }

  moveTo(index: number) {
    const { player, stepsCount, win, selected, tiles } = this.state

    if (win || selected === index) return

    if (selected === -1) {
      this.setState({ selected: index })
      return
    }

    this.setState({ selected: -1 })
    this.setState({ stepsCount: stepsCount + 1 })

    const newTiles = [...tiles]
    newTiles[selected] = tiles[index]
    newTiles[index] = tiles[selected]

    if (newTiles.every((el, i) => el.index === i)) {
      this.setState({ win: true })
    } else {
      this.setState({ player: 1 - player }, this.runAi)
    }

    this.setState({ tiles: newTiles })
  }

  runAi = () => {
    const { aiMessage, tiles, ai, player, selected } = this.state

    if (!ai || player !== 1 || selected !== -1) return

    this.setState({ aiWait: true })

    if (!aiMessage) {
      const { lang } = this.context

      this.setState({ aiMessage: true })

      setTimeout(() => alert(translate("WaitForAI", lang)))
    }

    const ruch1 = Math.floor(Math.random() * tiles.length)
    let ruch2 = Math.floor(Math.random() * (tiles.length - 1))
    if (ruch2 >= ruch1) ruch2++

    setTimeout(() => {
      this.moveTo(ruch1)

      setTimeout(() => {
        this.moveTo(ruch2)

        this.setState({ aiWait: false })
      }, Math.random() * 1000 + 500)
    }, Math.random() * 1000 + 500)
  }

  handleOpen = () => {
    this.setState({ open: true })
    this.setState({ tiles: this.state.tiles.sort(() => Math.random() - 0.5) })
  }

  handleClose = () => {
    this.setState({
      open: false,
      player: 0,
      stepsCount: 0,
      win: false,
      ai: false,
      aiWait: false,
      selected: -1,
    })
  }

  handleToggleAi = () => {
    const { ai } = this.state

    this.setState({ ai: !ai }, this.runAi)
  }

  render() {
    const { player, stepsCount, open, win, ai, selected, tiles } = this.state
    const { lang } = this.context

    return (
      <>
        <Post post={gamePost(lang)} onClick={this.handleOpen} />

        <Portal
          title={translate("GameTitle", lang)}
          open={open}
          handleClose={this.handleClose}
        >
          <div
            className={classes.map}
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
                  classes.mapTailContainer,
                  selected === i ? classes.active : "",
                ].join(" ")}
                style={{
                  backgroundImage: `url(https://tile.openstreetmap.org/${scale}/${x}/${y}.png)`,
                }}
                onClick={() => {
                  if (!this.state.aiWait) this.moveTo(i)
                }}
              />
            ))}
          </div>

          <p>
            <Translate>Player</Translate>
            {player === 0 ? "A" : "B"}. <Translate>StepsCount</Translate>:{" "}
            {stepsCount}. {win && <Translate>Win</Translate>}
          </p>

          <button onClick={this.handleToggleAi}>
            {ai ? (
              <Translate>StopAI</Translate>
            ) : (
              <Translate>StartAI</Translate>
            )}
          </button>
        </Portal>
      </>
    )
  }
}
