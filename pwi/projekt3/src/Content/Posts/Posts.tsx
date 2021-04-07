import React from "react"
import posts from "./posts.json"
import styles from "./Posts.module.scss"

interface IPost {
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

function Post({
  post: { img, url, imgAlt, title, description },
  onClick,
}: IPostProps) {
  return (
    <a href={url} className={styles.post} onClick={onClick}>
      <article>
        <div className={styles.image}>
          <img src={img} alt={imgAlt} />
        </div>

        <h3>{title}</h3>

        <p>{description}</p>
      </article>
    </a>
  )
}

const gamePost: IPost = {
  id: -1,
  url: "",
  img: "./img/puzzle.PNG",
  imgAlt: "Gra puzzle",
  title: "Gra polskie puzle",
  description:
    "Najlepsze puzle w Polsce, i nie tylko. Myślisz że znasz Polskę. 99% osób nie kończy tej gry. Bądz pierwszy! Zacznij już dziś",
}

export function Posts() {
  return (
    <main>
      <section>
        <h2 className={styles.title}>Najważniejsze usługi mapowe</h2>

        <div className={styles.posts}>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}

          {/* Game */}
          <Post post={gamePost} onClick={console.warn} />
        </div>
      </section>
    </main>
  )
}
