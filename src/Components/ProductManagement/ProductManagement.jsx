import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const addProducts = (product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
  };
  return (
    <div>
      <h1>This is From Product ManageMent</h1>
      <ProductForm addProducts={addProducts}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
