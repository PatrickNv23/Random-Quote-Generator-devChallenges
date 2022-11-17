import React from 'react'
import styles from '../css_modules/QuoteCard.module.css'

export default function QuoteCard({ quoteText }) {
  return (
    <div className={styles.containerTextQuoteItem}>
      <p className={styles.textQuoteItem}>
        {quoteText}
      </p>
    </div>
  )
}
