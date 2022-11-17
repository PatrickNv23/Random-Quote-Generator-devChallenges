import React from 'react'
import AuthorCard from './AuthorCard'
import styles from '../css_modules/QuoteMain.module.css'
import { useRandomQuote } from '../hooks/useRandomQuote.jsx'
import Loader from './Loader.jsx';
export default function QuoteMain() {

  const randomQuote = useRandomQuote("https://quote-garden.herokuapp.com/api/v3/quotes/random", {
    stringRandomQuote: "",
    author: "",
    genre: ""
  });

  if (randomQuote.stringRandomQuote === "") {
    return <Loader />
  }

  return (
    <div className={styles.containerQuoteMain}>
      <div className={styles.containerTextQuoteRandomMain}>
        <p className={styles.textQuoteRandomMain}>
          {randomQuote.stringRandomQuote}
        </p>
      </div>
      <AuthorCard infoAuthor={randomQuote} />
    </div>
  )
}
