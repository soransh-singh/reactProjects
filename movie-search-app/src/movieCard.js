import React from "react"

export default function MovieCard(props){
  return(
    <div className="card-list">
      {props.movies.filter(movie => movie["poster_path"]).map(movie =>(
        <div className="card" key={movie["id"]}>
          <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie["poster_path"]}`} alt=""/>
          <div className="car--component">
            <h2 className="card--title">{movie["title"]}</h2>
            <p><small>RELEASE DATE: {movie["release_date"]}</small></p>
            <p><small>RATING: {movie["vote_average"]}</small></p>
            <p className="card--desc">
              {movie["overview"]}
            </p>
          </div>
        </div>
      )
    )}
    </div>
  )
}
