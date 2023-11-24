import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open,setOpen]=useState(false)
  const [cusNav,setCusNav]=useState(false)
  const products = useSelector(state => state.cart.products)
  const location = useLocation();
  useEffect(() => {
    // Check if the current route is "/about" and update the state accordingly
    setCusNav(location.pathname === "/about");
  }, [location.pathname]);
  const additionalClass = cusNav ? "navbarabout" : "navbar";
  return (
    <div className={additionalClass}>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>INR</span>
            <ArrowDropDownIcon />
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">SHOPSY</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to="/about">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/contact">Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/stores">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <Link className='link' to="/auth/signup"><PersonOutlineIcon/></Link>
            <FavoriteBorderIcon/>
            <div className="cart" onClick={()=>setOpen(!open)}>
            <ShoppingCartIcon/>
            <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
