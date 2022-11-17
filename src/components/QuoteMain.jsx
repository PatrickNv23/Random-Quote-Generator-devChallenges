import React from 'react'
import AuthorCard from './AuthorCard'
import styles from '../css_modules/QuoteMain.module.css'
import { useRandomQuote } from '../hooks/useRandomQuote.jsx'
import Loader from './Loader.jsx';
import { animated, useSpring } from '@react-spring/web';
export default function QuoteMain() {

  const springs = useSpring({
    from: { x: 50000 },
    to: { x: 0 }
  })

  const randomQuote = useRandomQuote("https://quote-garden.herokuapp.com/api/v3/quotes/random", {
    stringRandomQuote: "",
    author: "",
    genre: ""
  });

  if (randomQuote.stringRandomQuote === "") {
    return <Loader />
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
          {randomQuote.stringRandomQuote}
        </p>
      </div>
      <AuthorCard infoAuthor={randomQuote} />
    </animated.div >

  )
}
