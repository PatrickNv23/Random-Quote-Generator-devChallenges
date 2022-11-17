import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.jsx';
import Loader from './Loader.jsx'
import styles from '../css_modules/QuoteList.module.css'
import QuoteCard from './QuoteCard.jsx';
export default function QuoteList() {

  const { name } = useParams();
  const allQuotes = useFetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${name}`);

  if (Object.keys(allQuotes).length === 0) {
    return <Loader />
  }

  return (
    <div className={styles.containerQuoteList}>
      <h2 className={styles.nameAuthorQuoteList}>{name}</h2>
      {
        allQuotes.data.map((quote) => {
          return <QuoteCard key={quote._id} quoteText={quote.quoteText} />
        })
      }
    </div>

  )
}
