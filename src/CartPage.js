// CartPage.js
import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const updateQuantity = (productId, quantity) => {
    // Dispatch an action to update the quantity
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  // Implement other functions for adding/removing items as needed

  const calculateTotalQuantity = () => {
    // Implement logic to calculate total quantity
    return cart.reduce((total, item) => item.total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    // Implement logic to calculate total amount
    return cart.reduce(
      (total, item) => item.total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
    <div class="container">
        
      <div class="row">
      {cart.map((item) => (
        <div class="col">
          <div class="card border-3">
                <img src={item.images} class="img-fluid rounded-start" style={{width:250}} alt="..." />
                <div class="card-body">
                <div>{item.title}</div>
                <li key={item.id}>
              <div>Price: ${item.price}</div>
              <div>
                Quantity:
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div>Total: ${item.price * item.quantity}</div>
              {/* Add remove button if needed */}
            </li>
            
          <div>Total Quantity: {calculateTotalQuantity()}</div>
          <div>Total Amount: ${calculateTotalAmount()}</div>
              </div>
            </div>
          </div>
))}
      </div>
 </div>
  
      
    </>
  );
};

export default CartPage;
