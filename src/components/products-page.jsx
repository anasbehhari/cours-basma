import { useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tide",
      category: "Cleaning Product",
      price: 200,
      date: "2025-03-01",
    },
    {
      id: 2,
      name: "Colgate",
      category: "Toothpaste",
      price: 50,
      date: "2025-03-02",
    },
  ]);

  const handleDelete = (id) => {
    setProducts((products) => {
      const filteredProducts = products.filter((product) => product.id !== id);
      return filteredProducts;
    });
  };
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr key={product.id + index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.date}</td>
              <td className="action-buttons">
                <button>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductsPage;
