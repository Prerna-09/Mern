import {Link}  from "react-router-dom"
import logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary nav-container">
  <div className="container-fluid">
    <img className="nav-logo" src={logo} alt="logo"/>
    <a className="navbar-brand" href="#">Lets's Connect</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/create">Create</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/add">Read</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/update">Update</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
