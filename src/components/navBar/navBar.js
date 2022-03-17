import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/category/1'>Remeras</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/category/2'>Pantalones</Link>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <CartWidget />
  </div>
  
</nav>
  

    )
}

export default Navbar;