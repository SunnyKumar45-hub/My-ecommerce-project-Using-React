import { Routes, Route, BrowserRouter } from 'react-router';
import {HomePage} from './Pages/home/HomePage';
import {CheckoutPage} from './Pages/checkout/CheckoutPage';
import {OrdersPage} from './Pages/orders/OrdersPage';
import {Tracking} from './Pages/Tracking';
import { NotFound } from './Pages/NotFound';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  })

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
      <Route path="tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
      <Route path="*" element={<NotFound />} cart={cart} />
    </Routes>
  )
}

export default App;