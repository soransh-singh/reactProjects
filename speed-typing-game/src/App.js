import React, {useState, useEffect} from "react"
import './App.css'

function App() {

  const [text, setText] = useState("")
  const [timeRemain, setTimeRemain] = useState(20)
  const [wordCount, setWordCount] = useState("")

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  return (
    <div className="container">
      <h1>How fast you can type ?!</h1>
      <textarea
        value = {text}
        onChange = {handleChange}
        disabled={false}
      />
      <p>Time Remaining: {timeRemain}</p>
      <button>Start</button>
      <h3>Word Count: {wordCount}</h3>
    </div>
  );
}

export default App;
