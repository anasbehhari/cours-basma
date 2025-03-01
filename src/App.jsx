import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AuthentificationPage from "./components/authentification-page";
import ProductsPage from "./components/products-page";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* // DISPLAY HOME PAGE (AUTHENTICATION) */}
        <Route
          path="/"
          element={
            <AuthentificationPage setIsAuthenticated={setIsAuthenticated} />
          }
        />
        {/* // DISPLAY ALL PRODUCTS */}
        <Route
          path="/products"
          element={
            isAuthenticated === true ? <ProductsPage /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
