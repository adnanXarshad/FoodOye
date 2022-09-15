import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password === reEnterPassword) {
      alert("Successful, press ok");
      axios.post("http://localhost:3000/signup", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <>
      <form className="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>

        <div className="input-container ic1">
          <label for="fullname" className="placeholder">
            Full Name
          </label>
          <div className="cut"></div>
          <input
            type="text"
            name="name"
            value={user.name}
            className="input"
            id="fullname"
            onChange={handleChange}
          />
        </div>

        <div className="input-container ic2">
          <label for="inputEmail" className="placeholder">
            Email
          </label>
          <div className="cut cut-short"></div>
          <input
            type="email"
            name="email"
            value={user.email}
            className="input"
            id="inputEmail"
            placeholder=" "
            onChange={handleChange}
          />
        </div>

        <div className="input-container ic2">
          <label for="inputPassword" className="placeholder">
            Password
          </label>
          <div className="cut cut-short"></div>
          <input
            type="password"
            name="password"
            value={user.password}
            className="input"
            id="inputPassword"
            placeholder=" "
            onChange={handleChange}
          />
        </div>

        <div className="input-container ic2">
          <label for="inputReEnterPassword" className="placeholder">
            Re-Enter Password
          </label>
          <div className="cut cut-short"></div>
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            className="input"
            id="inputReEnterPassword"
            placeholder=" "
            onChange={handleChange}
          />

          <div className="spacing">
            <button type="text" className="submit" onClick={handleSignup}>
              Create Account
            </button>
          </div>

          <div>
            <p>Already Registered ?</p>
            <button type="text" className="submit" onClick={goToLogin}>
              Login Here
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
