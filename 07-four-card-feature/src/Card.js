function Card(props) {
  return(
    <div className={`card ${props.addClass}`}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <div className="card__img"><img src={props.img} alt={`${props.title} icon`}/></div>
    </div>
  )
}

export default Card
