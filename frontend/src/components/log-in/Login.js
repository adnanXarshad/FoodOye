import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const goToSignup = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    axios.post("http://localhost:3000/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  return (
    <>
      <div className="center">
        <h1>Login Form</h1>
        <form>
          <div className="inputbox">
            <input
              type="email"
              name="email"
              value={user.email}
              id="inputEmail"
              required="required"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="inputbox">
            <input
              type="password"
              name="password"
              value={user.password}
              id="inputPassword"
              required="required"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="inputbox">
            <input type="button" value="SignUp" onClick={goToSignup} />
            Sign Up
          </div>
        </form>
      </div>
      <div className="LoginButton">
        <input type="button" value="Login Here" onClick={handleLogin} />
      </div>
    </>
  );
};

export default Login;
