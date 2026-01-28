import dayjs from 'dayjs';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config'; // ADD THIS

export function OrdersDetailsGrid({ order, loadCart }) {
  const addOrderedQuantity = async (productId) => {
    await axios.post(`${API_URL}/api/cart-items`, { // UPDATE THIS
      productId,
      quantity: 1
    });
    await loadCart();
  };
  
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <Fragment key={orderProduct.product.id}>
            <div className="product-image-container">
              <img src={`${API_URL}/${orderProduct.product.image}`} // UPDATE THIS
                alt={orderProduct.product.name} />
            </div>
            <div className="product-details">
              <div className="product-name">
                {orderProduct.product.name}
              </div>
              <div className="product-delivery-date">
                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button className="buy-again-button button-primary"
                onClick={() => addOrderedQuantity(orderProduct.product.id)}>
                <img className="buy-again-icon" src="images/icons/buy-again.png" alt="Buy again" />
                Add to Cart
              </button>
            </div>
            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}> {/* FIX THIS - was missing curly braces */}
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        )
      })}
    </div>
  );
}
