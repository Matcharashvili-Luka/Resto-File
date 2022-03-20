import React from 'react'

function MenuItem({ image, name, price, info, toggleCount }) {
  return (
    <div className='menuItemUi'>
        <div 
          style={{ backgroundImage: `url(${image})` }}></div>
        <div className='productInfo'>
          <div className='menuItemText'>
            <h4>{name}</h4>
            <p className='price'>${price}</p>
            <p className='info'>{info}</p>
          </div>
          <div className='menuItemButton'>
            <button onClick={toggleCount}>Add To Cart</button>  
          </div>
        </div>
    </div>
  )
}

export default MenuItem