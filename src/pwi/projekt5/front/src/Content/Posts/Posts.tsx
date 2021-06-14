import React, { useContext, useState } from "react"
import { Game } from "./Game"
import { Quizzes } from "./Quiz"
import classes from "./Posts.module.scss"
import { Translate, TranslationsContext } from "../../Translations"
import { useEffect } from "react"
import axios from "axios"
import { api } from "../../api"
import { Portal } from "../../Components/Portal"

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
    <article className={classes.post} onClick={onClick}>
      <div className={classes.image}>
        <img src={img} alt={imgAlt} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  )
}

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([])
  const { lang } = useContext(TranslationsContext)
  const [open, setOpen] = useState<IPost | null>(null)

  useEffect(() => {
    axios.get<IPost[]>(`${api}posts?lang=${lang}`).then((posts) => {
      setPosts(posts.data)
    })
  }, [lang])

  const openPost = (post: IPost) => {
    setOpen(post)
  }

  const handleClose = () => {
    setOpen(null)
  }

  return (
    <main>
      <section>
        <h2 className={classes.title}>
          <Translate>PostsTitle</Translate>
        </h2>

        <div className={classes.posts}>
          {posts.map((post) => (
            <Post post={post} key={post.id} onClick={() => openPost(post)} />
          ))}

          <Game />
          <Quizzes />
        </div>

        {open && (
          <Portal title={open.title} open={!!open} handleClose={handleClose}>
            <img src={open.img} alt={open.imgAlt} className={classes.postImage} />

            <p>{open.description}</p>

            {open.content?.map((txt, i) => (
              <p key={i}>{txt}</p>
            ))}

            <a href={open.url}>
              <Translate>More</Translate>
            </a>
          </Portal>
        )}
      </section>
    </main>
  )
}
