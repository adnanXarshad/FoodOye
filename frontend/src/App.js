import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/sign-up/SignUp";
import Home from "./Pages/Home";
import Login from "./components/log-in/Login";
import { useState } from "react";
import OrderForm from "./components/orderForm/OrderForm";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            user && user._id ? <Home /> : <Login passLoginUser={setLoginUser} />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login passLoginUser={setLoginUser} />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="*" element={<h2>no match</h2>} />
      </Routes>
    </>
  );
}

export default App;
