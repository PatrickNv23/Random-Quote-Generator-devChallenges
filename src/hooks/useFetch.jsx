import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    const getRandomQuote = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw { status: response.status, statusText: response.statusText }
        }
        const data_json = await response.json();
        setRandomQuote(data_json);
      } catch (e) {
        let message = e.statusText || "unknown"
        console.error(`Error ${e.status}: ${message}`)
      }

    }
    getRandomQuote();
  }, [])

  return randomQuote;
}
