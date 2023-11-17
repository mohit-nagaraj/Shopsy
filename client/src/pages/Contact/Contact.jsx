import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './contact.scss'
const Contact = () => {
  return (
    <div className='contactPage'>
      <section className='section-1'>
        <div className="wrapper">
        <h1>Get in touch with our creator-friendly support team</h1>
        <p>Our business hours are 9AM-6PM IST Monday-Friday and 11AM-5PM IST on weekends.</p>
        </div>
        <div className="row">
          <div className="card">
            <h3>Chat support</h3>
            <span>We support chat on our paid plans. Please log in to chat.</span>
            <Link className='link' to="/contact">Log in <ArrowRightAltIcon/></Link>
          </div>
          <div className="card">
            <h3>Email support</h3>
            <span>Prefer to email? Send us an email and we’ll get back to you soon.</span>
            <Link className='link' to="/contact">Send email <ArrowRightAltIcon/></Link>
          </div>
          <div className="card">
            <h3>Help center</h3>
            <span>Our self-serve help center is open 24/7 with 150+ articles to help.</span>
            <Link className='link' to="/contact">Visit it <ArrowRightAltIcon/></Link>
          </div>
        </div>
      </section>
      <section className='wrap'>
        <div className="form">
          <div className="left">
            <h1>How can we help you?</h1>
            <p>Thank you for your interest in SHOPSY. Please use this form to contact us. We will get back to you as soon as we can.</p>
          </div>
          <div className="right">
            <form action="">
              <label htmlFor="fname">First Name <span className="req">*</span></label>
              <input type="text" name='fname' id='fname' required/>
              <label htmlFor="lname">Last Name </label>
              <input type="text" name='lname' id='lname'/>
              <label htmlFor="email">Email <span className="req">*</span></label>
              <input type="email" name='email' id='email' required/>
              <label htmlFor="sub">Subject <span className="req">*</span></label>
              <input type="text" name='sub' id='sub' required/>
              <label htmlFor="msg">Message <span className="req">*</span></label>
              <textarea name="msg" id="msg" cols="30" rows="7"  required></textarea>
              <button>Send message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact