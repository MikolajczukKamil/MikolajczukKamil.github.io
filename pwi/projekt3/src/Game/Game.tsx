import React, { useState } from "react"
import { Portal } from "../Components/Portal"
import styles from "./Game.module.scss"

export function Game() {
  const [iloscKrokow, setIloscKrokow] = useState(0)
  const [open, setOpen] = useState(false)
  const [win, setWin] = useState(false)

  return (
    <Portal
      title="Gra - Polskie puzle"
      open={open}
      handleClose={() => setOpen(false)}
    >
      <div className="map"></div>

      <p>
        Licznik kroków: {iloscKrokow}. {win && "Gratulacje! Wygrana!"}
      </p>
    </Portal>
  )
}
