import React from 'react';
import { MenuListItems } from '../../Helpers/MenuListItems';
import MenuItem from './MenuItem';
import '../../Styles/MenuComponentStyle/MenuItem.css';

function MenuList({ toggleCount }) {
  return (
    <div className='menuContainer'>
      <div className='menuList'>
        {MenuListItems.map((menuItem, key) => {
          return (
            <MenuItem 
              key={key}
              image={menuItem.Image} 
              name={menuItem.name} 
              info={menuItem.info} 
              price={menuItem.price}
              toggleCount={toggleCount}
            />
          );
        })}
      </div>
    </div>
  )
}

export default MenuList