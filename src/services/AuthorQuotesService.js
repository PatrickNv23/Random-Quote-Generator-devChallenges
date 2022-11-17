export const getAllRandomQuotesFromAuthor = async (author) => {
  try {
    const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`);
    if (!response.ok) {
      throw { status: response.status, statusText: response.statusText }
    }
    const data_json = await response.json();
    return {
      author,
      randomQuotes: data_json.data
    }
  } catch (e) {
    let message = e.statusText || "unknown"
    console.error(`Error ${e.status}: ${message}`)
  }
}

