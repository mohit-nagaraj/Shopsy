import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import './cart.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cartReducer'

const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const totalPrice = () =>{
        let total = 0
        products.forEach(item=>{
            total += item.newPrice * item.quantity
        })
        return total.toFixed(2)
    }
  return (
    <div className='cartComponent'>
        <h1>Products in your cart</h1>
        <hr />
        {products?.map(item=>(//using data? makes sure that if data is not present then it will not throw an error
            <div className="item" key={item.id}>
                <img src={"http://localhost:1337"+item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}...</p> {/**this is to limit the length of desc shown */}
                    <div className="holder">{item.quantity} x ₹{item.newPrice}</div>
                </div>
                <div onClick={()=>dispatch(removeItem(item.id))}>
                <DeleteOutlineIcon className='delete'/>
                </div>
            </div>
        ))
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>₹{totalPrice()}</span>
        </div>
        <button className='checkout'>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default Cart