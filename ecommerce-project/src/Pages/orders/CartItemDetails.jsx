import { formatMoney } from '../../utils/money';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config'; // ADD THIS

export function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdating, setUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  
  const updateQuantity = (event) => {
    if (event.key === 'Enter') {
      switchUpdate();
    }
    if (event.key === 'Escape') {
      setQuantity(cartItem.quantity);
      setUpdating(false);
    }
  }
  
  const changeQuantity = (event) => {
    setQuantity(event.target.value);
  }
  
  const switchUpdate = async () => {
    setUpdating(!isUpdating);
    if (isUpdating === true) {
      await axios.put(`${API_URL}/api/cart-items/${cartItem.productId}`, { // UPDATE THIS
        quantity: Number(quantity)
      });
    }
    setUpdating(false);
    loadCart();
  }
  
  const deleteCartItem = async () => {
    await axios.delete(`${API_URL}/api/cart-items/${cartItem.productId}`); // UPDATE THIS
    await loadCart();
  }
  
  return (
    <>
      <img className="product-image" 
        src={`${API_URL}/${cartItem.product.image}`} // UPDATE THIS
        alt={cartItem.product.name} />
      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {isUpdating ? (
              <input className='' type='text' style={{ width: 50 }}
                value={quantity} onChange={changeQuantity}
                onKeyDown={updateQuantity} />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span className="update-quantity-link link-primary"
            onClick={switchUpdate}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
