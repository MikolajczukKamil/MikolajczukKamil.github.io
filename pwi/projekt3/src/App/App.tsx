import React from "react"
import "./App.scss"
import { Header } from "../Header"
import { Content } from "../Content"
import { Footer } from "../Footer"
import { Game } from "../Game"

export function App() {
  return (
    <>
      <Header />

      <Content />

      <Footer />

      <Game />
    </>
  )
}
