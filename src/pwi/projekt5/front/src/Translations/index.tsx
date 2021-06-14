import { useState, createContext } from "react"
import pl from "./pl.json"
import en from "./en.json"
import { useContext } from "react"
import { getCookie, setCookie } from "../Cookies"

export const translations: any = { pl, en }

export const TranslationsContext = createContext({
  lang: "en",
  changeLang: (_lang: string): void => {},
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

const availableLangs = ["pl", "en"]

export function TranslationsContextProvider({ children }: { children: any }) {
  const [lang, setLang] = useState(getCookie("lang") || "pl")

  const changeLang = (l: string) => {
    l = l.toLocaleLowerCase()

    if (availableLangs.includes(l)) {
      setLang(l)
      setCookie("lang", l)
    }
  }

  return (
    <TranslationsContext.Provider value={{ lang, changeLang }}>
      {children}
    </TranslationsContext.Provider>
  )
}
