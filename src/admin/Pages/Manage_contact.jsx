
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Footer from '../../website/Footer'
import Aheader from '../components/Aheader'
// import Aheader from '../components/Aheader'

function Manage_contact() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch()
  },[]);
  const fetch=async()=>{
    const res=await axios.get('http://localhost:3000/contact');
    console.log(res);
    setData(res.data);
  }
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/contact/${id}`);
    fetch();
  }
  return (
   
    <div>
       
  <Aheader/>
    <div className="row">
      <div className="col-lg-12">
        {/*    Hover Rows  */}
        <div className="panel panel-default">
          <div className="panel-heading">
          <h1><br></br></h1>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-hover table table-bordered border-dark">
                <thead>
                <tr>
                    <th colSpan={8}><h1><i> <center>Manage Contact</center></i></h1></th>
                  </tr>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>subject</th>
                    <th>message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                data.map((value,index,arr)=>{
                      return(
                        <tr>
                          <td>{value.id}</td>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                          <td>{value.subject}</td>
                          <td>{value.message}</td>
                          <td className="center">
                            <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                            <button className='btn btn-primary' >Edit</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* End  Hover Rows  */}
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Manage_contact