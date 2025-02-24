import React from 'react';
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.item);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar navbar-light bg-white px-4 py-3 shadow-sm">
      <span
        className="navbar-brand mb-0 h1"
        style={{ color: '#42A5F5', fontSize: '30px', cursor: 'pointer' }}
      >
        SHOP<span style={{ color: 'black' }}>LANE</span>
      </span>
      <div className="d-flex align-items-center">
        <Link
          to="/login"
          className="btn btn-outline-primary me-3"
          style={{ fontWeight: 'bold', padding: '10px 20px' }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="btn btn-primary me-3"
          style={{ fontWeight: 'bold', padding: '10px 20px' }}
        >
          Sign Up
        </Link>
        <Link
          to="/fav"
          className="btn btn-outline-secondary me-3"
          style={{ fontWeight: 'bold', padding: '10px 20px' }}
        >
          ❤ Favorites
        </Link>
        <Link
          to="/product"
          className="btn btn-outline-success me-3"
          style={{ fontWeight: 'bold', padding: '10px 20px' }}
        >
          🛍 Product
        </Link>
        <Link
          to="/cart"
          className="btn btn-dark position-relative"
          style={{ fontWeight: 'bold', padding: '10px 20px' }}
        >
          🛒 My Bag
          {totalQuantity > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: '12px' }}
            >
              {totalQuantity} 
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
