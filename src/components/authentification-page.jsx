import { useState } from "react";
import { useNavigate } from "react-router";
//username : admin
//password : admin
function AuthentificationPage({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName !== "admin" || password !== "admin") {
      alert("invalid username or password");
    } else {
      setIsAuthenticated(true);
      navigate("/products");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
      }}
    >
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default AuthentificationPage;
