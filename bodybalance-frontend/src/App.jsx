import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
  <div>
 <h1> Your Journey Starts Here – BodyBalance Fitness App</h1>
  <NavBar />
  <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  </Routes>
  </div>
  );
}
export default App;
