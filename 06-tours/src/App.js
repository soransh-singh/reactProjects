import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])

  async function fetchTours(){
    const response = await fetch(url)
    const data = await response.json()
    setTours(data)
  }

  useEffect(()=>{
    fetchTours()
  }, [])


  return (
    <div>
      <h1>Our Tours</h1>
      hello world
      <div>
      </div>
    </div>)
}

export default App
