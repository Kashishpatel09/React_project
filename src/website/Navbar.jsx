import React from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function Navbar() {
  const redirect = useNavigate();

    // Delete session
    const logout = () => {
        localStorage.removeItem('userid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/')
    }
  return (
    
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <NavLink className="navbar-brand" to="/">
          <strong>
            <span>Little</span> Fashion
          </strong>
        </NavLink>
        <div className="d-lg-none">
          <NavLink href="sign-in.html" className="bi-person custom-icon me-3" />
          <NavLink href="product-detail.html" className="bi-bag custom-icon" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                Story
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Faq">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Services">
                Services
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
            {(
                        () => {
                            //  Use  session
                            if (localStorage.getItem('userid')) {
                                return (
                                        <NavLink to="/profile" className="nav-item nav-link">Your's profile.. {localStorage.getItem('uname')}</NavLink>
                                )
                            }
                        }
                    )()}
            
          </ul>
          <div className="d-none d-lg-block">
          {(
                    () => {
                        if (localStorage.getItem('userid')) {
                            return (
                                <>
                                    <a href="javascript:void(0)" onClick={logout} className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block btn btn-secondary">Logout</a>
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Link to="/login" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block btn btn-secondary">Login</Link>
                                </>
                            )
                        }
                    }
                )()}
            {/* <NavLink to="/Login" className="bi-person custom-icon me-3" /> */}
            
          </div>
          <NavLink to="/products" className="bi-bag custom-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
