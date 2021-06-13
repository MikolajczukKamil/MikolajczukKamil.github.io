import React, { useEffect, useState, useContext } from "react"
import axios from "axios"
import classes from "./Links.module.scss"
import { api } from "../../api"
import { Translate, TranslationsContext } from "../../Translations"

interface PageLink {
  lang: string
  url: string
  name: string
}

export function Links() {
  const [links, setLinks] = useState<PageLink[]>([])
  const { lang } = useContext(TranslationsContext)

  useEffect(() => {
    axios.get<PageLink[]>(`${api}links?lang=${lang}`).then((links) => {
      setLinks(links.data)
    })
  }, [lang])

  return (
    <aside className={classes.section}>
      <h3>
        <Translate>UsefulLinks</Translate>
      </h3>

      <ul>
        {links.map(({ url, name }) => (
          <li key={url}>
            <a href={url} className={classes.usefullLink}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
