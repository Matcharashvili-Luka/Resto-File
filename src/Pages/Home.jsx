import React from 'react';
import '../Styles/Home.css';
import Backgound from '../Assets/back.png';
import Easy from '../Assets/easy.png';
import Delivery from '../Assets/delivery.png';
import Quality from '../Assets/quality.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='PageContainer'>
        <div className='homePage'>
          <div className='homePageText'>
              <h1>Luka's Resto</h1>
              <h2>Food for heople who love food!</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur neque, voluptatem modi accusamus molestias nam atque non iure nemo?</p>
              <Link to='/menu'>
                <button>Order Now</button>
              </Link>
          </div>
          <div className='img'>
            <img src={Backgound} />
          </div>
        </div>
        <div className='icons'>
          <div className='icon Easy'>
            <img src={Easy} />
            <p>Easy To Order</p>
          </div>
          <div className='icon Delivery'>
            <img src={Delivery} />
            <p>Fast Delivery</p>
          </div>
          <div className='icon Quality'>
            <img src={Quality} /> 
            <p>High Quality</p>
          </div>
        </div>
    </div>
  )
}

export default Home