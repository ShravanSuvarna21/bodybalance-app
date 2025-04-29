import './App.css'
import {  Route, Routes, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Register from './components/Register';
function App() {
  return (
  <div>
<h1>Your Journey Starts Here – BodyBalance Fitness App</h1>
<NavBar/>
<Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
  </div>
  )
 
}

export default App
