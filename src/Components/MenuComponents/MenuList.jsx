import React from 'react';
import { MenuListItems } from '../../Helpers/MenuListItems';
import MenuItem from './MenuItem';
import '../../Styles/MenuComponentStyle/MenuItem.css';

function MenuList({ onAdd }) {
  return (
    <div className='menuContainer'>
      <div className='menuList'>
        {MenuListItems.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.id}
              image={menuItem.Image} 
              name={menuItem.name} 
              info={menuItem.info} 
              price={menuItem.price}
              onAdd={onAdd}
              menuItem={menuItem}
            />
          );
        })}
      </div>
    </div>
  )
}

export default MenuList