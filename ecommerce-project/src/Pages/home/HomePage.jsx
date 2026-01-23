import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({ cart, loadCart }) {

  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      let response;

      if (search) {
         response = await axios.get(`/api/products?search=${search}`)
      } else{
         response = await axios.get('/api/products')
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

        <ProductsGrid products={products} />
      </div>
    </>
  )
}
