import React from 'react';
import '../Styles/Home.css';
import Backgound from '../Assets/back.png';
import Easy from '../Assets/easy.png';
import Delivery from '../Assets/delivery.png';
import Quality from '../Assets/quality.png';
import { Link } from 'react-router-dom';
import About from '../Pages/About';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className='PageContainer'>
        <div className='homePage'>
          <div className='homePageText'>
              <h1>Luka's Resto</h1>
              <h2>Food for people who love food!</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur neque, voluptatem modi accusamus molestias nam atque non iure nemo?</p>
              <Link to='/menu'>
                <button>Order Now</button>
              </Link>
          </div>
          <div className='img'>
            <img src={Backgound} alt='' />
          </div>
        </div>
        <div className='icons'>
          <div className='icon Easy'>
            <img src={Easy} alt='' />
            <p>Easy To Order</p>
          </div>
          <div className='icon Delivery'>
            <img src={Delivery} alt='' />
            <p>Fast Delivery</p>
          </div>
          <div className='icon Quality'>
            <img src={Quality} alt='' /> 
            <p>High Quality</p>
          </div>
        </div>
        <About />
        <Footer />
    </div>
  )
}

export default Home