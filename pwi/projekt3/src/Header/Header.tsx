import React from "react"
import { LinkButton } from "../Components/LinkButton"
import styles from "./Header.module.scss"

export function Header() {
  return (
    <header>
      <div className={styles.row}>
        <h1>Usługi mapowe GIS</h1>

        <div className={styles.spacer} />

        <div className={styles.buttons}>
          <LinkButton component="a">Facebook</LinkButton>
          <LinkButton component="a">Twitter</LinkButton>
        </div>
      </div>
    </header>
  )
}
