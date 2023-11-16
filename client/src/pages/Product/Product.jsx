import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import './product.scss'
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    "https://images.pexels.com/photos/18274585/pexels-photo-18274585/free-photo-of-kitchen-entrance-to-house-under-flower-bushes.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Polo T-shirt</h1>
        <span className='price'>$199</span>
        <p>Desc: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="quantity">
          <button 
          onClick={()=>setQuantity(prev=>prev-1)}//one more way to decrease using hook
          disabled={quantity===1}//to stop decreasing when quantity is 1
          >-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item"><FavoriteBorderIcon/>ADD TO WISHLIST</div>
          <div className="item"><BalanceIcon/>ADD TO COMPARE</div>
        </div>
        <div className="info">
          <span>Vender: Polo</span>
          <span>Product type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <div className="details">
          <hr/>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product