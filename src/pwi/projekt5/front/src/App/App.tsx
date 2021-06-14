import React from "react"
import "./App.scss"
import { Header } from "../Header"
import { Content } from "../Content"
import { Footer } from "../Footer"
import { Cookies } from "../Cookies"
import { TranslationsContextProvider } from "../Translations"

export function App() {
  return (
    <TranslationsContextProvider>
      <Header />

      <Content />

      <Footer />

      <Cookies />
    </TranslationsContextProvider>
  )
}
