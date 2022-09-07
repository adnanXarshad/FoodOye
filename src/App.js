import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/sign-up/SignUp";
import Home from "./Pages/Home";
import Login from "./components/log-in/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>no match</h2>} />
      </Routes>
    </>
  );
}

export default App;
