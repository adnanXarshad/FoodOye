import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  
  const handleSignUp = () => {
    console.log("Signup CLicked")
    navigate("/signup");
  };
  const handleLogin = () => {
    console.log("Login CLicked");
    navigate("/login");
  };
  return (
    <div className="Navigator">
      <nav className="navigation navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/">
            FOOD-OYE!
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="google.com"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="google.com">
                  MENU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="google.com">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="google.com">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleLogin}
              >
                LOGIN
              </button>
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSignUp}
              >
                SIGNUP
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
