import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteItem } from "../store/Favslice";
import { FaHeart } from "react-icons/fa";
const Fav = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.favorites || []);
  const handleRemoveFavorite = (id) => {
    dispatch(removeFavoriteItem(id));
  };
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Your Favorite Products</h2>
        <div className="d-flex align-items-center">
          <FaHeart color="red" />
          <span
            className="badge badge-pill badge-danger"
            style={{
              position: "relative",
              top: "-10px",
              marginLeft: "5px",
              fontSize: "14px",
            }}
          >
            {favoriteItems.length}
          </span>
        </div>
      </div>
      {favoriteItems.length === 0 ? (
        <div className="text-center">
          <h3>Your Favorite Products are Empty</h3>
        </div>
      ) : (
        <div className="row">
          {favoriteItems.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch"
              key={product.id}
              style={{ marginBottom: "20px" }}
            >
              <div className="card shadow-sm" style={{ width: "100%" }}>
                <div className="text-center" style={{ padding: "10px" }}>
                  <img
                    className="card-img-top"
                    src={product.image || "https://via.placeholder.com/150"}
                    alt={product.title || "No title available"}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title || "No title"}</h5>
                  <p className="card-text" style={{ flexGrow: 1 }}>
                    {product.description
                      ? product.description.substring(0, 100)
                      : "No description available"}
                    ...
                  </p>
                  <p className="card-text font-weight-bold">
                    Price: ${product.price || "N/A"}
                  </p>
                </div>
                <div
                  className="card-footer text-center"
                  style={{ backgroundColor: "white" }}
                >
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFavorite(product.id)}
                    aria-label={`Remove "${
                      product.title || "product"
                    }" from favorites`}
                  >
                    <FaHeart color="red" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Fav;
