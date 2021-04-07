import React from "react"
import links from "./links.json"
import styles from "./Links.module.scss"

export function Links() {
  return (
    <aside className={styles.section}>
      <h3>Przydatne linki</h3>

      <ul>
        {links.map(({ url, name }) => (
          <li key={url}>
            <a href={url} className={styles.usefullLink}>{name}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
