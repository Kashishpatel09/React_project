import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Aheader from '../components/Aheader'
import AFooter from '../components/Afooter'

function Manage_employee() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch()
  },[]);
  const fetch=async()=>{
    const res=await axios.get('http://localhost:3000/employee');
    console.log(res);
    setData(res.data);
  }
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/employee/${id}`);
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
                 <th colSpan={8}><h1><i> <center>Manage Employee</center></i></h1></th>
                </tr>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>BirthDate</th>
                  <th>ContactNumber</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                data.map((value,index,arr)=>{
                      return(
                        <tr>
                          <td>{value.id}</td>
                          <td>{value.Name}</td>
                          <td>{value.BirthDate}</td>
                          <td>{value.ContactNumber}</td>
                          <td>{value.Email}</td>
                          <td>{value.Salary}</td>
                          <td>{value.Status}</td>
                          <td className="center">
                            <button className='btn btn-primary'  onClick={()=>deleteHandel(value.id)}>Delete</button>
                            <button className='btn btn-danger'>Edit</button>
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
  <AFooter/>
  </div>
  )
}

export default Manage_employee