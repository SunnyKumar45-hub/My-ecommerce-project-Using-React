import { it, describe, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate, useLocation } from 'react-router';
import axios from 'axios';
import { PaymentSummary } from './PaymentSummary';
import userEvent from '@testing-library/user-event';

vi.mock('axios');

function LocationTracker() {
  const location = useLocation();
  return(
    <div data-testid='url-path'>{location.pathname}</div> 
  )
}
describe('', () => {
  let loadCart;
  let user;
  let mockPaymentSummary;

  beforeEach(() => {
    user = userEvent.setup();
    loadCart = vi.fn();
    axios.post.mockResolvedValue({ data: {} });

    mockPaymentSummary = {
        totalItems: '14',
        productCostCents: '23493',
        shippingCostCents: '0',
        totalCostBeforeTaxCents: '23493',
        taxCents: '2349',
        totalCostCents: '25842'
      }
  })


  it('display payment summary', async() => {
    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={mockPaymentSummary}
          loadCart={loadCart} />
      </MemoryRouter>
    );

    const totalitems = await screen.findByTestId('total-items');
    const productCostCents = await screen.findByTestId('product-costCents');
    const shippingCostCents = await screen.findByTestId('payment-shipping');
    const totalCostBeforeTaxCents = await screen.findByTestId('payment-before-tax');
    const taxCents = await screen.findByTestId('tax-Cents');
    const totalCostCents = await screen.findByTestId('total-costCents');

    expect(totalitems).toHaveTextContent('Items :(14)')
    expect(productCostCents).toHaveTextContent('$234.93')
    expect(shippingCostCents).toHaveTextContent('$0.00')
    expect(totalCostBeforeTaxCents).toHaveTextContent('$234.93')
    expect(taxCents).toHaveTextContent('$23.49')
    expect(totalCostCents).toHaveTextContent('$258.42')
  })
  it('', async() => {
    render(
      <MemoryRouter>
         <PaymentSummary 
          paymentSummary={mockPaymentSummary}
          loadCart={loadCart} />
        <LocationTracker />
      </MemoryRouter>
    )
      const PlaceOrder = screen.getByTestId('place-order');
      await user.click(PlaceOrder);

      expect(axios.post).toHaveBeenCalled();
      expect(
        screen.getByTestId('url-path')
      ).toHaveTextContent('/orders');
      
  })
})
