import React from "react"
import { Game } from "./Game"
import { Quizzes } from "./Quiz"
import posts from "./posts.json"
import classes from "./Posts.module.scss"
import { Translate } from "../../Translations"

export interface IPost {
  id: number
  url: string
  img: string
  imgAlt: string
  title: string
  description: string
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
