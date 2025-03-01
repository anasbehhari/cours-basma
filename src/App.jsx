import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AuthentificationPage from "./components/authentification-page";
import CreateProductPage from "./components/create-product-page";
import ProductsPage from "./components/products-page";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthentificationPage setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route
          path="/products"
          element={
            isAuthenticated === true ? (
              <ProductsPage products={products} setProducts={setProducts} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/products/create"
          element={
            isAuthenticated === true ? (
              <CreateProductPage setProducts={setProducts} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
