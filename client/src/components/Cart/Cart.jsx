import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import './cart.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cartReducer'
import {loadStripe} from '@stripe/stripe-js'
import axios from "axios";

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

    const stripePromise = loadStripe('pk_test_51N2BGASI7A4y1MS1gBFfJSt3MjfqHoB4oiQ2zv5AhCYiXFcroNOxHtFfqHqB7kvELySDfOgcRH02EPO7E8BDUqnq00G70DMOFz');

    const handlePayment = async() =>{
        try{
            const stripe = await stripePromise;
            const res = await axios.create({
                baseURL: 'http://localhost:1337/api',
                headers: {
                  Authorization: "bearer 6c5be87916f227fe8c5b47cc1d28c0624eb83b2b9cab2ecc9d97ddc15ceb5144a103fe586374bfff3dd6df92db9b07b02f3fe18d0ec7ab550b0d6f5607b6aa1b1a88fe95ffce6245ad86798942ad637448f35ff414be71eb4c8099bc6b802658dd59785fd25e456c26e4011837fb274c0f17a97b70081e7bff9f21449b6c8325",
                },
              }).post("/orders", {
              products,
            });
            await stripe.redirectToCheckout({
              sessionId: res.data.stripeSession.id,
            });
        }catch(err){
            console.log(err)
        }
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
        <button className='checkout' onClick={handlePayment}>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default Cart