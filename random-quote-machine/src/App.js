import React, {useState, useEffect} from "react"
import "./master.css"
import tweetIcon from "./icon-twitter.svg"
function App() {
  const url = "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  const [quote, setQuote] = useState({})

  async function newQuote(){
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setQuote(data["data"][0])
  }
  useEffect(()=>{
    newQuote()
  }, [])
  return (
    <div className="App">
      <div className="quote__app"  id="quote-box">
        <p className="quote__text" id="text">
          {quote["quoteText"]}
        </p>

        <p className="quote__author" id="author">~{quote["quoteAuthor"]}</p>

        <div className="btns">
        <a
        href={`https://twitter.com/intent/tweet?text=${quote["quoteText"]} -by ${quote["quoteAuthor"]} #quote #author`}
          className="tweet__btn"
          target="blank"
          id="tweet-quote">
          <img src={tweetIcon} alt=""/>
          </a>
          <button className="quote__btn" id="new-quote" onClick={()=>{newQuote()}}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
