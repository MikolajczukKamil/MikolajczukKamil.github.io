import React from "react"
import styles from "./LinkButton.module.scss"

interface IButtonProps {
  component?: string
  children: string
  href?: string
}

export function LinkButton({ children, href }: IButtonProps) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  )
}
