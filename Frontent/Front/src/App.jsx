import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import "./Components/style.css"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Create from "./Components/Create"
import Add from "./Components/Add"
import Update from "./Components/Update"

function App() {
  
  return (
    <>
    <Navbar/>

    
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/:id" element={<Update/>} />
        
      </Routes>
    
    
    </>
  )
}

export default App
