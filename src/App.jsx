import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AuthentificationPage from "./components/authentification-page";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthentificationPage setIsAuthenticated={setIsAuthenticated} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
