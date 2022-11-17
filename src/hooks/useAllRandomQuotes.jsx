import { useState, useEffect } from 'react';

export const useAllRandomQuotes = (url, defaultValue) => {

  const [allQuotes, setAllQuotes] = useState(defaultValue);

  useEffect(() => {
    const getRandomQuote = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw { status: response.status, statusText: response.statusText }
        }
        const data_json = await response.json();
        setAllQuotes(data_json.data);
      } catch (e) {
        let message = e.statusText || "unknown"
        console.error(`Error ${e.status}: ${message}`)
      }

    }

    getRandomQuote();
  }, [])

  return allQuotes
}
