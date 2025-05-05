import React from "react"; 
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
// import { useSelector,useDispatch } from "react-redux";
import Account from "./components/Account";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
// import PrivateRoute from './components/PrivateRoute'
function App() {
//   const {isLoggedIn,data}=useSelector((state)=>{
//     return state.user
//   })
  return (
  <div>
<div></div>
<Home/>
  <NavBar />
  <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/account" element={<Account />} />
  
  </Routes>
  </div>
  );
}
export default App;
