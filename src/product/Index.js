import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product.");
        const data = await response.json();
        setProduct(data); // Update state with product data
      } catch (err) {
        setError(err.message); // Capture and set the error message
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchProduct(); 
  }, [id]); 


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <h2>Price: ${product.price}</h2>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
