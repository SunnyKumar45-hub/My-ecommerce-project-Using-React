import dayjs from 'dayjs';
import { Fragment } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export function OrdersDetailsGrid({ order, loadCart }) {

  const addOrderedQuantity = async (productId) => {
    await axios.post('/api/cart-items', {
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
              <img src={orderProduct.product.image} />
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
                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                Add to Cart
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
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

