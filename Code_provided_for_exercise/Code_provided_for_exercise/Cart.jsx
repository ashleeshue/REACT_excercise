import React from 'react';

function Cart({ numberOfItems }) {
  return (
    <div>
      {/* Display the number of items in the cart */}
      <p>Items in Cart: {numberOfItems}</p>
    </div>
  );
}

export default Cart;
