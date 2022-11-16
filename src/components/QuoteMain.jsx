import React from 'react'
import AuthorCard from './AuthorCard'
import styles from '../css_modules/QuoteMain.module.css'
import { useRandomQuote } from '../hooks/useRandomQuote.jsx'
export default function QuoteMain() {

  const randomQuote = useRandomQuote("https://quote-garden.herokuapp.com/api/v3/quotes/random", "");

  return (
    <div className={styles.containerQuoteMain}>
      <div className={styles.containerTextQuoteRandomMain}>
        <p className={styles.textQuoteRandomMain}>
          {randomQuote}
        </p>
      </div>
      <AuthorCard />
    </div>
  )
}
