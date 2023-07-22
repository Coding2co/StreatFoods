import React from 'react'
import {Link ,useNavigate} from 'react-router-dom'

export default function Navbar() {

const navigate =useNavigate();
const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
}


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3 fs-italic" to="/">Streat</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link p-2 active fs-7" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
          <Link className="nav-link p-2 active fs-7" aria-current="page" to="/Orders">MyOrders</Link>
        </li>:" "
        
        }

      </ul>
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>
      <Link className="btn btn-success text-success mx-2 bg-white" to="/createuser">Sign Up</Link>
      <Link className="btn btn-success text-success mx-2 bg-white" to="/login">Login</Link>
      </div>:
      <div>
      <Link className="btn btn-success text-success mx-2 bg-white" to="/mycart">MyCart</Link>
      <div className="btn btn-success text-danger mx-2 bg-white fs-6" onClick={handleLogout}>Log Out</div>
      </div>
      }
   
    </div>
  </div>
</nav>
    </div>
  )
}
