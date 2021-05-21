import React from "react"
import { LinkButton } from "../Components/LinkButton"
import classes from "./Footer.module.scss"

export function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.content}>
        <p>Kamil Mikołajczuk</p>

        <LinkButton href="https://github.com/MikolajczukKamil">
          Github
        </LinkButton>
        <LinkButton href="https://www.linkedin.com/in/kamil-miko%C5%82ajczuk-61682b16a/">
          LinkedIn
        </LinkButton>
      </div>
    </footer>
  )
}
