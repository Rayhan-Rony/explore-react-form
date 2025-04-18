import React, { useState } from "react";

const ProductForm = ({ addProducts }) => {
  const [err, setErr] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);
    // validation
    if (name.length === 0) {
      setErr("Please Add a product name");
      return;
    } else if (price.length === 0) {
      setErr("Please Provide a price");
      return;
    } else if (price < 0) {
      setErr("Price can not be negative");
      return;
    } else if (quantity < 1) {
      setErr("Please add at least one product");
      return;
    } else {
      setErr("");
    }
    const newProduct = {
      name,
      price,
      quantity,
    };
    addProducts(newProduct);
  };
  return (
    <div>
      <h1>Add A New Product</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{err}</small>
      </p>
    </div>
  );
};

export default ProductForm;
