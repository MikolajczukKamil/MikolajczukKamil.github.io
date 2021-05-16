import React from "react"
import { CloseIcon } from "../Icons/Close"
import classes from "./Portal.module.scss"

interface IPortalProps {
  title: string
  open: boolean
  handleClose: () => void
  children: React.ReactChild | React.ReactChild[]
}

export function Portal({ open, title, children, handleClose }: IPortalProps) {
  return (
    <aside>
      {open && (
        <div className={classes.portal}>
          <div className={classes.view}>
            <header className={classes.header}>
              <h2 className={classes.title}>{title}</h2>

              <button onClick={handleClose} className={classes.closeGame}>
                <CloseIcon className={classes.closeIcon} />
              </button>
            </header>

            <section>{children}</section>
          </div>
        </div>
      )}
    </aside>
  )
}
