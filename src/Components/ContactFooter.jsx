import React from 'react';
import { Link } from 'react-router-dom';

function ContactFooter() {
  return (
    <div className='contactPageFooter'>
        <div className='links'>
            <h4>Quick Links</h4>
            <Link to='/'  style={{ textDecoration: 'none', color: 'white' }}>
                <p>Home</p>
            </Link>
            <p>About us</p>
            <Link to='/menu'  style={{ textDecoration: 'none', color: 'white' }}>
                <p>Menu</p>
            </Link>
            <Link to='/contact'  style={{ textDecoration: 'none', color: 'white' }} >
                <p>Contact us</p>
            </Link>
        </div>
        <div className='links'>
            <h4>Get In Touch</h4>
            <p><i class="fa-solid fa-envelope"></i> Example@email.com</p>
            <p><i class="fa-solid fa-phone"></i> +999 555 222 111</p>
            <p><i class="fa-solid fa-location-dot"></i> Georgia/Tbilisi</p>
        </div>
        <div className='links'>
            <h4>Social Media</h4>
            <p><i class="fa-brands fa-facebook"></i> Facebook</p>
            <p><i class="fa-brands fa-instagram"></i> Instagram</p>
            <p><i class="fa-brands fa-twitter"></i> Twitter</p>
        </div>
        <div className='links'>
            <h4>Locations</h4>
            <p>Georgia/Tbilisi</p>
            <p>Georgia/Qutaisi</p>
            <p>Georgia/Batumi</p>
            <p>Georgia/Satchkere</p>
        </div>
    </div>
  )
}

export default ContactFooter