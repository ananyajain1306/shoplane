import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
} from "../store/Cartslice";

const CartItem = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.item);

  // Calculate the total price and total quantity
  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  const handleDelete = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  if (products.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <h3>Your Cart is Empty</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>


      {/* Cart Items */}
      <div className="row">
        {products.map((product) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch"
            key={product.id}
            style={{ marginBottom: "20px" }}
          >
            <div className="card shadow-sm" style={{ width: "100%" }}>
              <div className="text-center" style={{ padding: "10px" }}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text font-weight-bold">
                  Price: ${product.price}
                </p>
                <div className="quantity-controls mt-2">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDecrease(product.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleIncrease(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div
                className="card-footer text-center"
                style={{ backgroundColor: "white" }}
              >
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Remove
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h4 className="card-title">Order Summary</h4>
          <p className="card-text">Total Items: {totalQuantity}</p>
          <p className="card-text">Total Price: ${totalPrice}</p>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
