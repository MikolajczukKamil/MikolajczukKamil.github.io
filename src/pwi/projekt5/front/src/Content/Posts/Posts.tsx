import React, { useContext, useState } from "react"
import { Game } from "./Game"
import { Quizzes } from "./Quiz"
import classes from "./Posts.module.scss"
import { Translate, TranslationsContext } from "../../Translations"
import { useEffect } from "react"
import axios from "axios"
import { api } from "../../api"

export interface IPost {
  id: number
  url: string
  img: string
  imgAlt: string
  title: string
  description: string
  content?: string[] | null
}

interface IPostProps {
  post: IPost
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
}

export function Post({
  post: { img, url, imgAlt, title, description },
  onClick,
}: IPostProps) {
  return (
    <a href={url} className={classes.post} onClick={onClick}>
      <article>
        <div className={classes.image}>
          <img src={img} alt={imgAlt} />
        </div>

        <h3>{title}</h3>

        <p>{description}</p>
      </article>
    </a>
  )
}

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([])
  const { lang } = useContext(TranslationsContext)

  useEffect(() => {
    axios.get<IPost[]>(`${api}posts?lang=${lang}`).then((posts) => {
      setPosts(posts.data)
    })
  }, [lang])

  return (
    <main>
      <section>
        <h2 className={classes.title}>
          <Translate>PostsTitle</Translate>
        </h2>

        <div className={classes.posts}>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}

          <Game />
          <Quizzes />
        </div>
      </section>
    </main>
  )
}
