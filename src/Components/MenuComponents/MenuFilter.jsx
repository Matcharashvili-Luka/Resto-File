import React from 'react';
import '../../Styles/MenuComponentStyle/MenuFilter.css';

function MenuFilter() {
  return (
    <div className='menuFilter'>
      <div className='filterComponents'>
        <div className='typeFilter'>
          <h1>type</h1>
        </div>
        <div className='priceFilter'>
          <h1>price</h1>
        </div>
      </div>
    </div>
  )
}

export default MenuFilter