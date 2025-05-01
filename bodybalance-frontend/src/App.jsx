import React from "react"; 
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
  <div>
<Home/>
  <NavBar />
  <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  </Routes>
  </div>
  );
}
export default App;
