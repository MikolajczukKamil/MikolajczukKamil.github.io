import React, { Component } from 'react'
import { IPost, Post } from '../Posts'
import { Portal } from '../../../Components/Portal'
import classes from './Game.module.scss'

const gamePost: IPost = {
  id: -1,
  url: '#',
  img: './img/puzzle.PNG',
  imgAlt: 'Gra puzzle',
  title: 'Gra polskie puzle',
  description:
    'Najlepsze puzle w Polsce, i nie tylko. Myślisz że znasz Polskę. 99% osób nie kończy tej gry. Bądz pierwszy! Zacznij już dziś',
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
  iloscKrokow: number
  open: boolean
  win: boolean
  ai: boolean
  aiMessage: boolean
  aiWait: boolean
  selected: number
  tiles: ITile[]
}

export class Game extends Component<{}, IState> {
  state: IState = {
    player: 0,
    iloscKrokow: 0,
    open: false,
    win: false,
    ai: false,
    aiMessage: false,
    aiWait: false,
    selected: -1,
    tiles: generateTiles(),
  }

  moveTo(index: number) {
    const { player, iloscKrokow, win, selected, tiles } = this.state

    if (win || selected === index) return

    if (selected === -1) {
      this.setState({ selected: index })
      return
    }

    this.setState({ selected: -1 })
    this.setState({ iloscKrokow: iloscKrokow + 1 })

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
      this.setState({ aiMessage: true })

      setTimeout(() => alert('Teraz ruch AI, poczekaj chwilę'))
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
      iloscKrokow: 0,
      win: false,
      ai: false,
      aiWait: false,
      selected: -1,
    })
  }

  handleToogleAi = () => {
    const { ai } = this.state

    this.setState({ ai: !ai }, this.runAi)
  }

  render() {
    const { player, iloscKrokow, open, win, ai, selected, tiles } = this.state

    return (
      <>
        <Post post={gamePost} onClick={this.handleOpen} />

        <Portal
          title="Gra - Polskie puzle"
          open={open}
          handleClose={this.handleClose}
        >
          <div
            className={classes.map}
            style={{
              gridTemplateColumns: `repeat(${XEnd - XStart + 1}, 1fr)`,
              gridGap: win ? 0 : undefined,
              userSelect: win ? 'none' : undefined,
            }}
          >
            {tiles.map(({ index, x, y }, i) => (
              <div
                key={index}
                className={[
                  classes.mapTailContainer,
                  selected === i ? classes.active : '',
                ].join(' ')}
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
            Gracz {player === 0 ? 'A' : 'B'}. Licznik kroków: {iloscKrokow}.{' '}
            {win && 'Gratulacje! Wygrana!'}
          </p>

          <button onClick={this.handleToogleAi}>
            {ai ? 'Zatrzymaj AI dla gracza B' : 'Uruchom AI dla gracza B'}
          </button>
        </Portal>
      </>
    )
  }
}
