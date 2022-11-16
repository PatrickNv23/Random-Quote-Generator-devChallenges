import React from 'react'
import styles from '../css_modules/Header.module.css'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerTextHeader}>
        <p className={styles.textHeader}>random</p>
        <a href="/">
          <span className="material-icons-outlined">
            autorenew
          </span>
        </a>
      </div>
    </header>
  )
}
