import React, { useContext, useState } from "react";
import { login } from "../Services/AuthApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../Context/Global";

function Login() {
  const { setToken } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        const token = res.data.token;
        setToken(token);
        window.location.reload(false);
        // Or use navigate for a better SPA experience, if available
        //navigate("/");
      })
      .catch(() => {
        toast.error("email ou mot de passe invalide");
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <Link to="/register">Don't have an account? Register here</Link>
    </div>
  );
}

export default Login;
