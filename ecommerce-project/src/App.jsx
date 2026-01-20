import { Routes, Route } from 'react-router';
import {HomePage} from './Pages/HomePage';
import {CheckoutPage} from './Pages/checkout/CheckoutPage';
import {OrdersPage} from './Pages/OrdersPage';
import {Tracking} from './Pages/Tracking';
import { NotFound } from './Pages/NotFound';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
