import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../store/Cartslice";
import { addFavoriteItem, removeFavoriteItem } from "../store/Favslice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.item);
  const favoriteItems = useSelector((state) => state.favorites.favorites);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="container text-center">
        <h3>{error}</h3>
        <button className="btn btn-primary" onClick={fetchProducts}>
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container text-center">
        <h3>Loading Products...</h3>
      </div>
    );
  }

  const isInCart = (productId) => cartItems.some((item) => item.id === productId);
  const isInFavorites = (productId) => favoriteItems.some((item) => item.id === productId);

  const handleAddToCart = (product) => {
    if (isInCart(product.id)) {
      dispatch(removeCartItem(product.id));
    } else {
      dispatch(addCartItem(product));
    }
  };

  const handleFavoriteToggle = (product) => {
    if (isInFavorites(product.id)) {
      dispatch(removeFavoriteItem(product.id));
    } else {
      dispatch(addFavoriteItem(product));
    }
  };

  const cards = products.map((product) => (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
      <div className="card shadow-sm h-100">
        <Link to={`/product/${product.id}`}>
        <img
          className="card-img-top p-3"
          src={product.image}
          alt={product.title}
          style={{ objectFit: "contain", height: "200px" }}
        />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.substring(0, 100)}...</p>
          <p className="font-weight-bold">Price: ${product.price}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <button
            className={`btn ${isInCart(product.id) ? "btn-danger" : "btn-primary"}`}
            onClick={() => handleAddToCart(product)}
          >
            {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
          </button>
          <button
            className="btn btn-light"
            onClick={() => handleFavoriteToggle(product)}
          >
            {isInFavorites(product.id) ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h1 className="text-center my-4">Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
