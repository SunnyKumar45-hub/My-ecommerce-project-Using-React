import axios from 'axios';
import { Header } from '../../components/Header';
import './OrdersPage.css';
import { useState, useEffect } from 'react';
import { OrdersGrid } from './OrdersGrid';
import { API_URL } from '../../config'; // ADD THIS

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const getfetchOrders = async() => {
        const response = await axios.get(`${API_URL}/api/orders?expand=products`); // UPDATE THIS
        setOrders(response.data);
    }
    getfetchOrders();
  }, []); // ADD EMPTY DEPENDENCY ARRAY - IMPORTANT!
  
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <div className="orders-
