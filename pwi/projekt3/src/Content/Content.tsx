import React from "react"
import styles from "./Content.module.scss"
import { Posts } from "./Posts"
import { Links } from "./Links"

export function Content() {
  return (
    <div className={styles.container}>
      <Posts />
      <Links />
    </div>
  )
}
