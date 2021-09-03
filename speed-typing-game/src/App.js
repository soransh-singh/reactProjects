import React, {useState, useEffect, useRef} from "react"
import './App.css'

function App() {

  const START_TIME = 30
  const [text, setText] = useState("")
  const [timeRemain, setTimeRemain] = useState(START_TIME)
  const [isTimer, setIsTimer] = useState(false)
  const [wordCount, setWordCount] = useState("")
  const refInput = useRef()

  const startGame = async ()=>{
    await setIsTimer(true)
    setText("")
    setTimeRemain(START_TIME)
    refInput.current.focus()
  }

  const handleChange = (e)=>{
    setText(e.target.value)
    console.log(refInput)
  }

  const countWord = (text) => {
    const words = text.split(" ")
    return words.filter((word)=> word !== "").length
  }

  useEffect(()=>{
    if(timeRemain >0 && isTimer){
      setTimeout(()=>{
        setTimeRemain(prev => prev -1)
      }, 1000)
    }else if (timeRemain === 0) {
      setIsTimer(false)
      const noOfWord = countWord(text)
      setWordCount(noOfWord)
    }
    // eslint-disable-next-line
  }, [timeRemain, isTimer])


  return (
    <div className="container">
      <h1>How fast you can type ?!</h1>
      <textarea
        value = {text}
        onChange = {handleChange}
        disabled={!isTimer}
        ref={refInput}
      />
      <p>Time Remaining: {timeRemain}</p>
      <button disabled={isTimer} onClick = {()=> startGame()}>Start</button>
      <h3>Word Count: {wordCount}</h3>
    </div>
  );
}

export default App;
