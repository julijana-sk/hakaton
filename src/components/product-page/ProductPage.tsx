import React from "react";
import Card from "./sub-components/Card";
import useFetch from "../../custom-hooks/useFetch";
import { Product } from "../../interfaces";

const ProductPage = () => {
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

  return (
    <React.Fragment>
      <div className="product-page">
        <div className="card-container">
          {data.map((product) => (
            <Card key={product.id} id={product.id} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
