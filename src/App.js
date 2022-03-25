import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  const[cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('shoppingCart')) || []);
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
  }, [cartItems])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id ===product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };
  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id))
  };

  return (
    <Router>
      <div>
        <Navbar itemsQtn={cartItems.length}/>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
            <Route path='/menu' element={<Menu onAdd={onAdd}/>} />
        </Routes>
        <Routes>
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Routes>
            <Route path='/cart' element={
              <ShoppingCart 
                cartItems={cartItems} 
                onAdd={onAdd} 
                onRemove={onRemove} 
                onDelete={onDelete} />}
               />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
