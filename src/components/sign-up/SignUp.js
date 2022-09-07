import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // const navigate = useNavigate();
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

  return (
    <form className="row g-3">
      {console.log("Users ", user)}

      <div className="col-md-6">
        <label for="inputName" className="form-label">
          Full Name
        </label>
        <input
          type="name"
          name="name"
          value={user.name}
          className="form-control"
          id="inputName"
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6">
        <label for="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={user.email}
          className="form-control"
          id="inputEmail"
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label for="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          className="form-control"
          id="inputPassword"
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6">
        <label for="inputReEnterPassword" className="form-label">
          Re-Enter Password
        </label>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          className="form-control"
          id="inputReEnterPassword"
          onChange={handleChange}
        />
      </div>

      <div className="col-6">
        <h6>Already Registered?</h6>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
        >
          Login
        </button>
      </div>
      <div className="col-6">
        <h6>New Register</h6>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
