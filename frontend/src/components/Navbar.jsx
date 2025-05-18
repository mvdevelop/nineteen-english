
import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { LuShoppingCart } from "react-icons/lu";

import './css/Navbar.css';
import logo from '../img/icon.png';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='title'>
            <img src={logo} alt="" />
            <h2>Tech Store</h2>
        </div>
        <nav>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Contact</a>
            <a href="">Extra</a>
        </nav>
        <div className='src'>
          <input type="search" />
          <button>
            <VscSearch />
          </button>
        </div>
        <div className='user'>
          <VscAccount />
          <LuShoppingCart />
        </div>
    </div>
  )
}

export default Navbar;
