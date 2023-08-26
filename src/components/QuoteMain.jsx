import React from 'react'
import AuthorCard from './AuthorCard'
import styles from '../css_modules/QuoteMain.module.css'
import { useFetch } from '../hooks/useFetch.jsx'
import Loader from './Loader.jsx';
import { animated, useSpring } from '@react-spring/web';
export default function QuoteMain() {

  const springs = useSpring({
    from: { x: 50000 },
    to: { x: 0 }
  })

  const randomQuote = useFetch("https://quote-garden.onrender.com/api/v3/quotes/random");

  if (Object.keys(randomQuote).length === 0) {
    return <Loader />
  }

  const stringRandomQuote = randomQuote?.data[0].quoteText;

  const infoAuthor = {
    author: randomQuote?.data[0].quoteAuthor,
    genre: randomQuote?.data[0].quoteGenre
  }

  return (
    <animated.div style={{
      width: "60%",
      height: "100%",
      maxHeight: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: "100px",
      ...springs
    }}>
      <div className={styles.containerTextQuoteRandomMain}>
        <p className={styles.textQuoteRandomMain}>
          {stringRandomQuote}
        </p>
      </div>
      <AuthorCard infoAuthor={infoAuthor} />
    </animated.div >
  )
}
