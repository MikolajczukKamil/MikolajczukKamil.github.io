import { useContext } from "react"
import { LinkButton } from "../Components/LinkButton"
import { Translate, TranslationsContext } from "../Translations"
import classes from "./Header.module.scss"

export function Header() {
  const { lang, changeLang } = useContext(TranslationsContext)

  return (
    <header>
      <div className={classes.row}>
        <h1>
          <Translate>PageTitle</Translate>
        </h1>

        <div className={classes.spacer} />

        <div className={classes.buttons}>
          <LinkButton component="a" href="https://www.facebook.com/facebook">
            Facebook
          </LinkButton>

          <LinkButton component="a" href="https://twitter.com/Twitter">
            Twitter
          </LinkButton>
        </div>

        <div className={classes.buttons}>
          <LinkButton
            component="a"
            active={lang === "pl"}
            onClick={() => changeLang("pl")}
          >
            PL
          </LinkButton>

          <LinkButton
            component="a"
            active={lang === "en"}
            onClick={() => changeLang("en")}
          >
            EN
          </LinkButton>
        </div>
      </div>
    </header>
  )
}
