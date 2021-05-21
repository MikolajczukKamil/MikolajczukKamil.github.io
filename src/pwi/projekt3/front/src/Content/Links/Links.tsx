import React from "react"
import links from "./links.json"
import classes from "./Links.module.scss"

export function Links() {
  return (
    <aside className={classes.section}>
      <h3>Przydatne linki</h3>

      <ul>
        {links.map(({ url, name }) => (
          <li key={url}>
            <a href={url} className={classes.usefullLink}>{name}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
