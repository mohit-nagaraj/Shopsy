import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './card.scss'
const Card = ({item}) => {
  useEffect(() => {
    console.log(item);
  });
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className="image">
        {item?.attributes.isNew && <span className="new">New Season</span>}
        <img src={"http://localhost:1337"+item?.attributes.img.data.attributes.url} alt="" className="mainImg" />
        <img src={"http://localhost:1337"+item?.attributes.img2.data.attributes.url} alt="" className="secImg" />
      </div>
      <h2>{item?.attributes.title}</h2>
      <div className="price">
      <span>₹{item?.attributes.oldPrice}</span>
      <span>₹{item?.attributes.newPrice}</span>
      </div>
    </div>
    </Link>
  )
}

export default Card