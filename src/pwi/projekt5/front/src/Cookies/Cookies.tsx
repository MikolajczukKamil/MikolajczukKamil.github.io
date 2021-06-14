import { useState } from "react"
import { LinkButton } from "../Components/LinkButton"
import { Translate, translate } from "../Translations"
import classes from "./Cookies.module.scss"
import { getCookie, setCookie } from "./utils"

export function Cookies() {
  const [accepted, setAccepted] = useState(!!getCookie("cookies_accepted"))

  const acceptCookies = () => {
    setAccepted(true)
    setCookie("cookies_accepted", "1")
  }

  return accepted ? (
    <></>
  ) : (
    <div className={classes.cookies}>
      <div className={classes.cookiesContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="notifications--information"
          fill="#004593"
          width="24px"
          height="24px"
        >
          <path d="M15.086 18.175H8.913v-1.508h1.508v-4.665H8.913v-1.507h4.665v6.172h1.576v1.508h-.068zM10.42 7c0-.617.548-1.166 1.165-1.166h.754c.617 0 1.165.549 1.165 1.166v.753c0 .617-.548 1.165-1.165 1.165h-.754c-.617 0-1.165-.548-1.165-1.165V7zM11.998.005A11.97 11.97 0 000 12.002 11.97 11.97 0 0011.998 24a11.97 11.97 0 0011.997-11.998c0-6.647-5.414-11.997-11.998-11.997z"></path>
        </svg>

        <p>
          <Translate>CookiesInfo</Translate>
          <a href={translate("CookiesLink")} target="_blank" rel="noreferrer">
            <Translate>CookiesMore</Translate>
          </a>
        </p>

        <LinkButton onClick={acceptCookies}>
          <Translate>CookiesAccept</Translate>
        </LinkButton>
      </div>
    </div>
  )
}
