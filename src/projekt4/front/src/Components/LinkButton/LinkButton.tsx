import React from "react"
import classes from "./LinkButton.module.scss"

interface IButtonProps {
  component?: string
  children: string
  href?: string
}

export function LinkButton({ children, href }: IButtonProps) {
  return (
    <a href={href} className={classes.button}>
      {children}
    </a>
  )
}
