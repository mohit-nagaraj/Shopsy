import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>We curate a collection of trendy and timeless clothing to elevate your wardrobe. From casual essentials to statement pieces, our carefully selected range ensures you'll find the perfect look for every occasion. Explore the latest trends in fashion, embrace your unique style, and shop with confidence at Shopsy.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Email: support@shopsy.com</span>
          <span>Tel: 080 - 2311 - 2736</span>
          <span>Address: Moodalpalya, Bangalore</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SHOPSY</span>
          <span className="copyright">©️ Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer