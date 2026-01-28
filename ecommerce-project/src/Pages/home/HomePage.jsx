import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

function HomePage({ cart, loadCart }) {

  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      let response;
      const API_URL = 'https://my-ecommerce-backend-5jue.onrender.com';
      
      if (search) {
         response = await axios.get(`${API_URL}/api/products?search=${search}`)
      } else{
         response = await axios.get(`${API_URL}/api/products`)
      }
      console.log(response.data);
      setProducts(response.data);
    }
    getHomeData();
  }, [search]);

  return (
    <>
      <Header cart={cart} loadCart={loadCart} />
      
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <div className="home-page">

        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
}

export default HomePage;
