import { useState, createContext } from "react"
import pl from "./pl.json"
import en from "./en.json"
import { useContext } from "react"

export const translations: any = { pl, en }

export const TranslationsContext = createContext({
  lang: "en",
  setLang: (_lang: string): void => {},
})

export function translate(text: string, lang = "pl"): string {
  return translations[lang][text] || translations.pl[text] || text
}

export function Translate({ children }: { children: string }) {
  const { lang } = useContext(TranslationsContext)

  return (
    <>{translations[lang][children] || translations.pl[children] || children}</>
  )
}

export function TranslationsContextProvider({ children }: { children: any }) {
  const [lang, setLang] = useState("pl")

  return (
    <TranslationsContext.Provider value={{ lang, setLang }}>
      {children}
    </TranslationsContext.Provider>
  )
}
