import './Cards.css'
const Cards = (props) => {
  return (
    <div className="card-container" id="card-id"> 
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </div>
  )
}

export default Cards;
