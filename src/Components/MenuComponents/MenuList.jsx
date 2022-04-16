import React, { useState } from 'react';
import { MenuListItems } from '../../Helpers/MenuListItems';
import MenuItem from './MenuItem';
import '../../Styles/MenuComponentStyle/MenuItem.css';

function MenuList({ onAdd }) {
  const [search, setSearch] = useState('');
  
  return (
    <div className='menuContainer'>
      <input 
        type="text" 
        className='searchBar'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder='Search Here'
      />
      <div className='menuList'>
        {MenuListItems.filter((item) => {
          if(search === ''){
            return item
          }else if (item.name.toLowerCase().includes(search.toLowerCase())){
            return item
          }else if (item.type.toLowerCase().includes(search.toLowerCase())){
            return item
          }
        }).map((menuItem) => {
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