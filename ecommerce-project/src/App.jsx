import { Routes, Route } from 'react-router';
import {HomePage} from './Pages/HomePage';
import {CheckoutPage} from './Pages/checkout/CheckoutPage';
import {OrdersPage} from './Pages/OrdersPage';
import {Tracking} from './Pages/Tracking';
import { NotFound } from './Pages/NotFound';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
    .then((response) => {
      setCart(response.data);
    })
  })

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<Tracking cart={cart} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
