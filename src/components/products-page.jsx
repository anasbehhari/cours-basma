import { useNavigate } from "react-router";

function ProductsPage({ products, setProducts }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setProducts((products) => {
      const filteredProducts = products.filter((product) => product.id !== id);
      return filteredProducts;
    });
  };
  const handleCreateProductClick = () => {
    navigate("/products/create");
  };
  return (
    <>
      <button className="btn" type="button" onClick={handleCreateProductClick}>
        + Create new Product
      </button>
      <h1>Products</h1>
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
                  <button className="btn">Edit</button>
                  <button
                    className="btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductsPage;
