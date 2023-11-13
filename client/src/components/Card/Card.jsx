import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className="image">
        {item.isNew && <span className="new">New Season</span>}
        <img src={item.img} alt="" className="mainImg" />
        <img src={item.img2} alt="" className="secImg" />
      </div>
      <h2>{item.title}</h2>
      <div className="price">
      <span>₹{item.oldPrice}</span>
      <span>₹{item.newPrice}</span>
      </div>
    </div>
    </Link>
  )
}

export default Card