import React from 'react';
import MenuList from '../Components/MenuComponents/MenuList';
import '../Styles/Menu.css';


function Menu({ toggleCount }) {
  return (
    <div className='menu'>
      <div className='menu_panelList-wrap'>
        <div className='menu_header_wrap'>
          <h1>Resto's Menu</h1>
        </div>
        <div className='menu_list-wrap'>
          <MenuList 
            toggleCount={toggleCount}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu