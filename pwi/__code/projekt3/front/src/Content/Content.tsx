import React from "react"
import classes from "./Content.module.scss"
import { Posts } from "./Posts"
import { Links } from "./Links"

export function Content() {
  return (
    <div className={classes.container}>
      <Posts />
      <Links />
    </div>
  )
}
