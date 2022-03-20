import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ count }) {

    const[navBarId, setNavBarId] = useState(false);
    const changeNavId = () => {
        setNavBarId(!navBarId)
    };
    const setNavIdToFalse = () => {
        setNavBarId(false)
    };

  return (
    <div className='navBar'>
        <div className='logo'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <p>
                    <i 
                        class="fa-solid fa-utensils"  
                        style={{ color: '#27ae60' }}>
                    </i>
                    <span> Resto</span>
                </p>
            </Link>
        </div>
        <ul className='navBarList' id={navBarId ? 'hidden_navBar' : ''}>
            <Link to='/' style={{ textDecoration: 'none' }}> 
                <li onClick={setNavIdToFalse}>Home</li>
            </Link >
            <li onClick={setNavIdToFalse}>About us</li>
            <Link to='/menu' style={{ textDecoration: 'none' }}>
                <li onClick={setNavIdToFalse}>Menu</li>
            </Link>
            <Link to='contact' style={{ textDecoration: 'none' }}>
                <li onClick={setNavIdToFalse}>Contact us</li>
            </Link>
        </ul>
        <div className='buttons'>
            <Link to='/contact'>
                <button className='btn contact_btn'><i class="fa-solid fa-phone"></i>
                </button>
            </Link>
            <Link to='/cart'>
                <button className='btn shoppingCart_btn'><i class="fa-solid fa-cart-shopping"></i>
                </button>
            </Link>
            <button 
                onClick={changeNavId}
                className='btn bars_btn'>
                <i class="fa-solid fa-bars-staggered"></i>
            </button>
        </div>
        <div className='itemsNum'>
            <p>{count}</p>
        </div>
    </div>
  )
}

export default Navbar