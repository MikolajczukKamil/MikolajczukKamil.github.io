import React from "react"
import { LinkButton } from "../Components/LinkButton"
import classes from "./Header.module.scss"

export function Header() {
  return (
    <header>
      <div className={classes.row}>
        <h1>Usługi mapowe GIS</h1>

        <div className={classes.spacer} />

        <div className={classes.buttons}>
          <LinkButton component="a">Facebook</LinkButton>
          <LinkButton component="a">Twitter</LinkButton>
        </div>
      </div>
    </header>
  )
}
