import React from 'react'
import styles from '../css_modules/Loader.module.css'
export default function Loader() {
  return (
    <div className={styles.containerLoader}>
      <span className={styles.loader}></span>
    </div>
  )
}
