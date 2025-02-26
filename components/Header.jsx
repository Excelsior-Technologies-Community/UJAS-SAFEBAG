import React from 'react'
import "../assets/header.css"
import  cart from "../assets/imgs/cart.svg"






const Header = () => {
  return (
    
    <div>
       <nav class="navbar">
        <div class="logo">
            <img src="src/assets/imgs/logo_top.svg" alt="Safe Bag Logo"/> 
           
        </div>
        <div class="nav-links">
            <a href="#">My Account <i class="fas fa-chevron-down"></i></a>
            
            <a href="#">Wish List <span class="wishlist-count">0</span></a>
        </div>
        <div class="cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <img src ="src/imgs/cart.svg" alt = "cart "/>
        </div>
    </nav>


    </div>
  );
}

export default Header
