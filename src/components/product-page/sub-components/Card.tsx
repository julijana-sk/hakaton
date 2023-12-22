import React from "react";
import { Product } from "../../../interfaces";
import useFetch from "../../../custom-hooks/useFetch";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
}

const Card: React.FC<CardProps> = ({ id }) => {
  const { data, isLoading, error } = useFetch<Product[]>(
    "http://localhost:5001/products"
  );

  if (!data) {
    return (
      <div>
        <p>No data found!</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  const product = data.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <p>Product not found!</p>
      </div>
    );
  }

  return (
    <div className="card" key={product.id}>
      <div className="card-wrapper">
        <Link to={`/product-page/${product.id}`}>
          {product.images.length > 0 && (
            <img src={product.images[0]} alt={`${product.title} - fashion`} />
          )}
          <div className="card-inner">
            <p className="title">{product.title}</p>
            <p className="price">{product.price} ден</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
