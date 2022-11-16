import React from 'react'
import styles from '../css_modules/AuthorCard.module.css'
export default function AuthorCard() {
  return (
    <div className={styles.containerRandomAuthor}>
      <div className={styles.containerNameRandomAuthor}>
        <p className={styles.nameRandomAuthor}>Bill Gates</p>
        <span className={styles.topicOfRandomAuthor}>business</span>
      </div>
      <div className={styles.containerIconRedirectAllQuotesOfAuthor}>
        <span className="material-icons-outlined">
          arrow_right_alt
        </span>
      </div>
    </div >
  )
}
