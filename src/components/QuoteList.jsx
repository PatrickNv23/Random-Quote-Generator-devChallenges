import React, { useEffect, useState } from 'react'
import { getAllRandomQuotesFromAuthor } from '../services/AuthorQuotesService.js';
import { useParams } from 'react-router-dom'
import { useAllRandomQuotes } from '../hooks/useAllRandomQuotes.jsx';
import Loader from './Loader.jsx'
import styles from '../css_modules/QuoteList.module.css'
import QuoteCard from './QuoteCard.jsx';
export default function QuoteList() {

  const { name } = useParams();
  const allQuotes = useAllRandomQuotes(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${name}`, []);

  if (allQuotes.length === 0) {
    return <Loader />
  }

  return (
    <div className={styles.containerQuoteList}>
      <h2 className={styles.nameAuthorQuoteList}>{name}</h2>
      {
        allQuotes.map((quote) => {
          return <QuoteCard key={quote._id} quoteText={quote.quoteText} />
        })
      }
    </div>

  )
}
