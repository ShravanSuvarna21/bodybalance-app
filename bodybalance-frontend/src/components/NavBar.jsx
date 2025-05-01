import {  Route, Routes, Link } from "react-router-dom";
export default function NavBar(){
    return(
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
        <Link to="/register"><button className= "text-gray px-4 py-2 rounded mt-2 hover:bg-blue-800">
    SignUp
  </button></Link>
      </div>
    )
}