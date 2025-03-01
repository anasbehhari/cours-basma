import { useState } from "react";
import { useNavigate } from "react-router";

function CreateProductPage({ setProducts }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || category === "" || price === "") {
      alert("Please fill all fields");
    } else {
      setProducts((products) => {
        return [
          ...products,
          {
            id: products.length + 1,
            name: name,
            category: category,
            price: price,
            date: new Date().toLocaleDateString(),
          },
        ];
      });
      navigate("/products");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px" }}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        required
        name="category"
        id="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option disabled selected value="">
          select category
        </option>
        <option value="Cleaning Product">Cleaning Product</option>
        <option value="Toothpaste">Toothpaste</option>
      </select>
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateProductPage;
