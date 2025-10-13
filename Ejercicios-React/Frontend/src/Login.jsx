import { useState } from "react";
import "./styles/Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    
  const handlerLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "admin" && password === "password") {
        console.log("Login OK");
        localStorage.setItem("isLoggedIn", "true");
        navigate("/activities");
    } else {
        console.log("Logn ERROR");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handlerLogin}>
        <h2>Iniciar Sesión</h2>

        <label htmlFor="username">Usuario:</label>
        <input 
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input 
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
