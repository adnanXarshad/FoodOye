import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();

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

  return (
    <div>
      {console.log("Users ",user)}
      <form className="row g-3">
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

        <div className="col-6">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
