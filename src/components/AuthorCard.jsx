import React from 'react'
import styles from '../css_modules/AuthorCard.module.css'
import { Link } from 'react-router-dom';
export default function AuthorCard({ infoAuthor }) {
  return (
    <Link className={styles.linkRedirectAuthorPage} to={`/author/${infoAuthor.author}`}>
      <div className={styles.containerRandomAuthor}>
        <div className={styles.containerNameRandomAuthor}>
          <p className={styles.nameRandomAuthor}>{infoAuthor.author}</p>
          <span className={styles.topicOfRandomAuthor}>{infoAuthor.genre}</span>
        </div>
        <div className={styles.containerIconRedirectAllQuotesOfAuthor}>
          <span className="material-icons-outlined">
            arrow_right_alt
          </span>
        </div>
      </div >
    </Link>
  )
}
