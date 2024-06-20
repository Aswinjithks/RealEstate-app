import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./loginpage.scss";
import apiRrequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthConext";
const Loginpage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username, password);
    try {
      if (!username || !password) {
        throw new Error("Enter credentials");
      }
      const res = await apiRrequest.post("/auth/login", {
        username,
        password,
      });
      updateUser(res?.data?.user);
      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message ?? error.message);
    } finally {
      setLoading(false);
    }
  };

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={loading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Loginpage;
