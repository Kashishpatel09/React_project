import logo from './logo.svg';
import './App.css';
import React,{ Suspense } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Products from './pages/Products';
import Login from './pages/Login';


// admin panel
import Aheader from './admin/components/Aheader';
import Manage_categories from './admin/Pages/Manage_categories';
import Manage_employee from './admin/Pages/Manage_employee';
import Manage_services from './admin/Pages/Manage_services';
import User from './admin/Pages/User';
import Manage_contact from './admin/Pages/Manage_contact';
import Feedback from './admin/Pages/Feedback';
// import Dashboard from './admin/Pages/Dashboard';
import AFooter from './admin/components/Afooter';
import Add_categories from './admin/Pages/Add_categories';
import Add_services from './admin/Pages/Add_services';
import Add_employee from './admin/Pages/Add_employee';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Loginpage from './admin/Pages/Loginpage';
import View_service from './pages/View_service';
import Service from './pages/Service';
const Dashboard = React.lazy(()=> import ('./admin/Pages/Dashboard'))
// const Dashboard = React.lazy(() => import('./admin/pages/Dashboard'));














function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="product" element={<Product/>}></Route>
        <Route path="faq" element={<Faq/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="/view_services" element={<View_service/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
       
       

       
      {/* admin panel */}
        <Route path="/aheader" element={<Aheader/>}></Route>
        <Route path="/manage_categories" element={<Manage_categories/>}></Route>
        <Route path="/manage_employee" element={<Manage_employee/>}></Route>
        <Route path="/manage_services" element={<Manage_services/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/manage_contact" element={<Manage_contact/>}></Route>
        <Route path="/Feedback" element={<Feedback/>}></Route>
        <Route path="/dashboard" element={<>
          <Suspense fallback = { <div class="spinner-border text-danger"></div> }> <Dashboard/></Suspense></>}></Route>
        <Route path="/add_categories" element={<Add_categories/>}></Route>
        <Route path="/add_services" element={<Add_services/>}></Route>
        <Route path="/add_employee" element={<Add_employee/>}></Route>
        <Route path="/loginpage" element={<Loginpage/>}></Route>
        
        {/* <Route path="/manage_signin" element={<Manage_signin/>}></Route> */}
        <Route path="/afooter" element={<AFooter/>}></Route>
        

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
