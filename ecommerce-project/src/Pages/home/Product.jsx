import { formatMoney } from '../../utils/money';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config'; // ADD THIS

export function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  const addToCart = async () => {
    await axios.post(`${API_URL}/api/cart-items`, { // UPDATE THIS
      productId: product.id,
      quantity
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
    await loadCart();
  }
  
  const selectQuantity = (event) => {
    const quantitySelected = Number(event.target.value);
    setQuantity(quantitySelected);
  }
  
  return (
    <>
      <div className="product-container"
       data-testid="product-container">
        <div className="product-image-container">
          <img className="product-image"
            data-testid="product-image"
            src={`${API_URL}/${product.image}`} // UPDATE THIS - images are served from backend
            alt={product.name} />
        </div>
        <div className="product-name limit-text-to-2-lines">
          {product.name}
        </div>
        <div className="product-rating-container">
          <img className="product-rating-stars"
           data-testid="product-rating-stars-image"          
            src={`images/ratings/rating-${product.rating.stars * 10}.png`}
            alt={`Rating: ${product.rating.stars} stars`} />
          <div className="product-rating-count link-primary">
            {product.rating.count}
          </div>
        </div>
        <div className="product-price">
          {formatMoney(product.priceCents)}
        </div>
        <div className="product-quantity-container">
          <select value={quantity} onChange={selectQuantity}
           data-testid='product-quantity-selector'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <opti
