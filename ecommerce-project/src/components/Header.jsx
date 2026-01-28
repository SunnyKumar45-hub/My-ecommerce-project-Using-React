import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import logoWhite from '../assets/images/logo-white.png';
import mobileLogoWhite from '../assets/images/mobile-logo-white.png';

export function Header({ cart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [searchText, setSearchText] = useState(search || '');
  const navigate = useNavigate();
  
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }
  
  const searching = () => {
    if (searchText) {
      navigate(`/?search=${searchText}`); // FIX: changed 'searchText=' to 'search='
    } else {
      navigate('/');
    }
    console.log(searchText);
  }
  
  const handleKeyPress = (event) => { // ADD: Allow Enter key to search
    if (event.key === 'Enter') {
      searching();
    }
  }
  
  let totalQuantity = 0;
  if (cart) {
    cart.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });
  }
  
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo"
              src={logoWhite}
              alt="Amazon logo" />
            <img className="mobile-logo"
              src={mobileLogoWhite}
              alt="Amazon logo" />
          </NavLink>
        </div>
        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search"
            value={searchText} // ADD: Controlled input
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress} /> {/* ADD: Enter key support */}
          <button className="search-button" onClick={searching}>
            <img className="search-icon" src="images/icons/search-icon.png" alt="Search" />
          </button>
        </div>
        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>
          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" alt="Cart" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
