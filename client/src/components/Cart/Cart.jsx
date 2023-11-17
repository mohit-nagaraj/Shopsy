import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import './cart.scss'
const Cart = () => {
const data = [
    {
        id: 'klanwd19w',
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1000",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1000",
        title: "Long Sleeve T-shirt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        isNew: true,
        oldPrice: 819,
        newPrice: 415,
        quantity: 1
    },
]
  return (
    <div className='cartComponent'>
        <h1>Products in your cart</h1>
        <hr />
        {data?.map(item=>(//using data? makes sure that if data is not present then it will not throw an error
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p> {/**this is to limit the length of desc shown */}
                    <div className="holder">{item.quantity} x ₹{item.newPrice}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>₹999</span>
        </div>
        <button className='checkout'>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default Cart