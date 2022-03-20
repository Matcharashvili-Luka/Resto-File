import React from 'react';
import MenuSearchBar from '../Components/MenuComponents/MenuSearchBar';
import MenuList from '../Components/MenuComponents/MenuList';
import MenuFilter from '../Components/MenuComponents/MenuFilter';
import '../Styles/Menu.css';


function Menu({ toggleCount }) {
  return (
    <div className='menu'>
      <MenuSearchBar />
      <MenuFilter />
      <div className='menu_panelList-wrap'>
        <div className='menu_list-wrap'>
          <MenuList toggleCount={toggleCount}/>
        </div>
      </div>
    </div>
  )
}

export default Menu