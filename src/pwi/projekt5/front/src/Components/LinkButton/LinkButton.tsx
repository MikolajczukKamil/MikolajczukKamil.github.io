import React from "react"
import classes from "./LinkButton.module.scss"

interface IButtonProps {
  component?: string
  children: any
  href?: string
  active?: boolean
  onClick?: any
}

export function LinkButton({ children, href, active, onClick }: IButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={href}
      className={[classes.button, active ? classes.active : ""].join(" ")}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
