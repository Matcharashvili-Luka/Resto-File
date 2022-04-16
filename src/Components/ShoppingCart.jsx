import React from 'react';
import '../Styles/ShoppingCart.css';

function ShoppingCart({ cartItems, onAdd, onRemove, onDelete }) {
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className='shoppingCartContainer'>
        <h1>Cart Items</h1>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className='cartItemName'>{item.name}</div>
            <div className='cartItemInfo'>
              <div className='quantityOperators'>
                <div>
                  <i 
                    class="fa-solid fa-circle-minus"
                    onClick={() => onRemove(item)}>
                  </i>
                </div>
                <div className='cartItemQty'>
                  {item.qty}
                </div>
                <div>
                  <i 
                    class="fa-solid fa-circle-plus"
                    onClick={() => onAdd(item)}>
                  </i>
                </div>
                <div>
                  <i
                    class="fa-solid fa-circle-xmark"
                    onClick={() => onDelete(item)}>
                  </i>
                 </div>
              </div>
              <div className='cartItemPrice'>
                Price: ${item.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
            <div className='shoppingCartFooter'>
                <div>Items Price</div>
                <div>${itemsPrice.toFixed(2)}</div>
                <div className='cartItemOrder'>
                  <button>Order Now</button>
                </div>
            </div>
        )}
        <div className='blank'></div>
    </div>
  )
}

export default ShoppingCart