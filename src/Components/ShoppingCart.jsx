import React from 'react';
import '../Styles/ShoppingCart.css';

function ShoppingCart({ cartItems, onAdd, onRemove, onDelete }) {
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div>
        <h1>Cart Items</h1>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div>{item.name}</div>
            <div className='quantityOperators'>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <div>
                {item.qty}
              </div>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onDelete(item)}>
                X
              </button>
            </div>
            <div>
              ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
            <>
                <hr />
                <div>Items Price</div>
                <div>{itemsPrice.toFixed(2)}</div>
            </>
        )}
    </div>
  )
}

export default ShoppingCart