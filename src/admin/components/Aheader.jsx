import React from "react";
import { NavLink,Link } from "react-router-dom";

function Aheader() {
  return (
    
    <div id="wrapper">
      
     
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
     
      ADMIN PANEL
    </a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Dashboard">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/User">User</Link>
        </li>
        
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink class="dropdown-item" to="/Add_categories">Add_categories</NavLink></li>
            <li><NavLink class="dropdown-item" to="/Manage_categories">Manage_categories</NavLink></li>
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Empolyee
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink class="dropdown-item" to="/Add_employee">Add_employee</NavLink></li>
            <li><NavLink class="dropdown-item" to="/Manage_employee">Manage_employee</NavLink></li>
          
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink class="dropdown-item" to="/Add_Services">Add_Services</NavLink></li>
            <li><NavLink class="dropdown-item" to="/Manage_Services#">Manage_Services</NavLink></li>
           
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Manage_contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Feedback">Feedback</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/loginpage">Login</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default Aheader;
