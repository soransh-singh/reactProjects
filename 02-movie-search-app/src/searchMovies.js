import React, {useState} from "react"

import MovieCard from "./movieCard"

export default function SearchMovies() {

  const [query, setQuery] = useState("")

  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()
    console.log("Submmiting...")
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3e2885686e6425583c7877704051fd75&language=en-US&query=${query}&page=1&include_adult=false`
    try{
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.results);
      setMovies(data.results)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={searchMovies} >
        <label htmlFor="query" className="label">Movie Name</label>
        <input type="text" name="query" className="input"
          placeholder="search a movie"
          value={query}
          onChange = {(e) => setQuery(e.target.value)}
          />
        <button type="submit" className="button">search</button>
      </form>
      <MovieCard movies={movies}/>
    </div>
  );
}
