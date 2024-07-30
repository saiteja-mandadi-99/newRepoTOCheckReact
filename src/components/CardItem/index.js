// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} displayCard`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} className="imageSize" />
    </li>
  )
}

export default CardItem
