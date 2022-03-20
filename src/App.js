import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';


function App() {

  const[count, setCount] = useState(0);
  const toggleCount = () =>{
    setCount(count + 1)
  }

  return (
    <Router>
      <div>
        <Navbar count={count}/>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
            <Route path='/menu' element={<Menu toggleCount={toggleCount}/>} />
        </Routes>
        <Routes>
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
