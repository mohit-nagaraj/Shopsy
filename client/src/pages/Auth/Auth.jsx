import React from 'react'
import './auth.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
    const [signin,setSignin]=useState(false)
  return (
    <div className='auth'>
        <div className="wrapper">
        <h1>{signin==true?"Login to your account":"Sign up for Shopsy"}</h1>
        <p>{signin==true?"Welcome back!":"Join for free forever. Upgrade anytime!"}</p>
        <form action="" method="post">
            {!signin && <><label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder='e.g. Mohit Nagaraj'/></>}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='dev@shopsy.com'/>
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" placeholder='Min 6 characters'/>
            {/* <input type='button' action='submit'>{signin==true?"Login":"Get Started"}</input> */}
            <input type="submit" value={signin ? "Login" : "Get Started"} />
            <Link className='link' to="/auth/login" onClick={e=>setSignin(prev=>!prev)}>{signin==true?"Sign up to create a new account":"Already have an account? Sign in"}</Link>
        </form>
        </div>
    </div>
  )
}

export default Auth