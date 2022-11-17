import { useState, useEffect } from 'react';

export const useRandomQuote = (url, defaultValue) => {
  const [randomQuote, setRandomQuote] = useState(defaultValue);


  useEffect(() => {
    const getRandomQuote = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw { status: response.status, statusText: response.statusText }
        }
        const data_json = await response.json();
        setRandomQuote({
          ...randomQuote,
          stringRandomQuote: data_json.data[0].quoteText,
          author: data_json.data[0].quoteAuthor,
          genre: data_json.data[0].quoteGenre
        });

      } catch (e) {
        let message = e.statusText || "unknown"
        console.error(`Error ${e.status}: ${message}`)
      }

    }

    getRandomQuote();
  }, [])

  return randomQuote
}
