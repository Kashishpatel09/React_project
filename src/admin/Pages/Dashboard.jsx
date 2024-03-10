import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink,Link } from 'react-router-dom'
import Aheader from '../components/Aheader'
import AFooter from '../components/Afooter'

function Dashboard() {
  return (

   
   <div id="wrapper">
     <Helmet>
     <link href="admin/assets/css/style.css" rel="stylesheet" />
    <link href="admin/assets/css/main-style.css" rel="stylesheet" />
     <link href="admin/assets/plugins/bootstrap/bootstrap.css" rel="stylesheet" />
    <link href="admin/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link href="admin/assets/plugins/pace/pace-theme-big-counter.css" rel="stylesheet" />
    
    
    <link href="admin/assets/plugins/morris/morris-0.4.3.min.css" rel="stylesheet" />
    <script src="admin/assets/plugins/jquery-1.10.2.js"></script>
    <script src="admin/assets/plugins/bootstrap/bootstrap.min.js"></script>
    <script src="admin/assets/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="admin/assets/plugins/pace/pace.js"></script>
    <script src="admin/assets/scripts/siminta.js"></script>

    <script src="admin/assets/plugins/morris/raphael-2.1.0.min.js"></script>
    <script src="admin/assets/plugins/morris/morris.js"></script>
    {/* <script src="admin/assets/scripts/dashboard-demo.js"></script> */}
     </Helmet>
     <Aheader/>
     <>
    
    <div className="col-lg-12">
        <div className="alert alert-info">
          <i className="fa fa-folder-open" /><b>&nbsp;Hello ! </b>Welcome Back <b>Jonny Deen </b>
          <i className="fa  fa-pencil" /><b>&nbsp;2,000 </b>Support Tickets Pending to Answere. nbsp;
        </div>
        
      </div>
      
      <div className="col-lg-12">
        <div className="panel panel-primary text-center no-boder">
          <div className="panel-body yellow">
            <i className="fa fa-bar-chart-o fa-3x" />
            <h3>20,741 </h3>
          </div>
          <div className="panel-footer">
            <span className="panel-eyecandy-title">Daily User Visits
            </span>
          </div>
          
        </div>
        <div className="panel panel-primary text-center no-boder">
          <div className="panel-body blue">
            <i className="fa fa-pencil-square-o fa-3x" />
            <h3>2,060 </h3>
          </div>
          <div className="panel-footer">
            <span className="panel-eyecandy-title">Pending Orders Found
            </span>
          </div>
        </div>
        <div className="panel panel-primary text-center no-boder">
          <div className="panel-body green">
            <i className="fa fa fa-floppy-o fa-3x" />
            <h3>20 GB</h3>
          </div>
          <div className="panel-footer">
            <span className="panel-eyecandy-title">New Data Uploaded
            </span>
          </div>
        </div>
        <div className="panel panel-primary text-center no-boder">
          <div className="panel-body red">
            <i className="fa fa-thumbs-up fa-3x" />
            <h3>2,700 </h3>
          </div>
          <div className="panel-footer">
            <span className="panel-eyecandy-title">New User Registered
            </span>
          </div>
        </div>
      </div>
      
   
    
    </>
    
    
    </div>
  
  
  

  )
}

export default Dashboard