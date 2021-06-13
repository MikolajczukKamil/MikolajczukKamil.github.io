import { useContext } from "react"
import { LinkButton } from "../Components/LinkButton"
import { Translate, TranslationsContext } from "../Translations"
import classes from "./Header.module.scss"

export function Header() {
  const { lang, setLang } = useContext(TranslationsContext)

  return (
    <header>
      <div className={classes.row}>
        <h1>
          <Translate>PageTitle</Translate>
        </h1>

        <div className={classes.spacer} />

        <div className={classes.buttons}>
          <LinkButton component="a">Facebook</LinkButton>
          <LinkButton component="a">Twitter</LinkButton>
        </div>
        <div className={classes.buttons}>
          <LinkButton
            component="a"
            active={lang === "pl"}
            onClick={() => setLang("pl")}
          >
            PL
          </LinkButton>
          <LinkButton
            component="a"
            active={lang === "en"}
            onClick={() => setLang("en")}
          >
            EN
          </LinkButton>
        </div>
      </div>
    </header>
  )
}
