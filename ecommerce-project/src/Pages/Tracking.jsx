import { Link } from 'react-router';
import './Tracking.css';
import { Header } from '../components/Header';
import { useParams } from 'react-router';
import axios from 'axios';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';

export function Tracking({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`)
      setOrder(response.data);
    }
    fetchTrackingData();
}, [orderId]);

  if(!order) {
    return null;
  }
  
const productDetails = order.products.find(
  (item) => item.productId === productId
);

if(!productDetails) {
  return <div>Product not found</div>
}

//Calculate delivery progress
const totalDeliveryTimeMs = productDetails.estimatedDeliveryTimeMs - order.orderTimeMs;
const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
const deliveryProgress = (timePassedMs / totalDeliveryTimeMs) * 100;
const deliveryPercent = Math.min(deliveryProgress, 100);

const isPreparing = deliveryPercent < 33;
const isShipped = deliveryPercent >= 33 && deliveryPercent <100;
const isDelivered = deliveryPercent === 100;

return (
  <>
    <Header cart={cart} />

    <div className="tracking-page">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
          Arriving on {dayjs(productDetails.estimatedDeliveryTimeMs).format('dddd, MMMM D')};
        </div>

        <div className="product-info">
          {productDetails.product.name}
        </div>

        <div className="product-info">
          Quantity: {productDetails.quantity}
        </div>

        <img className="product-image" 
        src={productDetails.product.image}
          alt="Athletic Cotton Socks" />

        <div className="progress-labels-container">
          <div className={`progress-label ${isPreparing ? 'current-status' : ''}`}>
            Preparing
          </div>
          <div className={`progress-label ${isShipped ? 'current-status' : ''}`}>
            Shipped
          </div>
          <div className={`progress-label ${isDelivered ? 'current-status' : ''}`}>
            Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{width :`${deliveryPercent}%`}}></div>
        </div>
      </div>
    </div>
  </>
)
}