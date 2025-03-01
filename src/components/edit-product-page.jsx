import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditProductPage({ products, setProducts }) {
  const { id } = useParams();
  const product = products.find((product) => product.id == Number(id));
  if (!product) return <div>Product not found</div>;
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || category === "" || price === "") {
      alert("Please fill all fields");
    } else {
      setProducts((products) => {
        return products.map((product) => {
          if (product.id === Number(id)) {
            return {
              id: product.id,
              name: name,
              category: category,
              price: price,
              date: product.date,
            };
          } else {
            return product;
          }
        });
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
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        required
        name="category"
        id="category"
        defaultValue={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option disabled value="">
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
        defaultValue={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default EditProductPage;
