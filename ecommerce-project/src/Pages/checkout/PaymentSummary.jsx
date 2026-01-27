import { formatMoney } from '../../utils/money';
import { useNavigate } from 'react-router';
import axios from 'axios';

export function PaymentSummary({ paymentSummary, loadCart }) {

  const navigate = useNavigate();

  const createOrder = async() => {
    await axios.post(`/api/orders`);
    await loadCart();
    navigate('/orders');
  };

  if (!paymentSummary) {
    return null;
  }
  return (
    <div className="payment-summary"
    data-test-id="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>

      <div className="payment-summary-row">
        <div data-testid='total-items'>
          Items :({paymentSummary.totalItems})
        </div>
        <div className="payment-summary-money"
         data-testid="product-costCents">
          {formatMoney(paymentSummary.productCostCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money"
         data-testid="payment-shipping">
          {formatMoney(paymentSummary.shippingCostCents)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money"
         data-testid="payment-before-tax">
          {formatMoney(paymentSummary.totalCostBeforeTaxCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money"
         data-testid="tax-Cents">
          {formatMoney(paymentSummary.taxCents)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money"
         data-testid="total-costCents">
          {formatMoney(paymentSummary.totalCostCents)}
        </div>
      </div>

      <button className="place-order-button button-primary"
      onClick={createOrder}
      data-testid="place-order">
        Place your order
      </button>
    </div>
  );
}  