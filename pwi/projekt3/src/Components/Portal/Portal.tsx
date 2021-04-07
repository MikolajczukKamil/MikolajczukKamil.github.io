import React from "react"
import { CloseIcon } from "../Icons/Close"
import styles from "./Portal.module.scss"

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
        <div className={styles.portal}>
          <div className={styles.view}>
            <header className={styles.header}>
              <h2 className={styles.title}>{title}</h2>

              <button onClick={handleClose} className={styles.closeGame}>
                <CloseIcon className={styles.closeIcon} />
              </button>
            </header>

            <section>{children}</section>
          </div>
        </div>
      )}
    </aside>
  )
}
