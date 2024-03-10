import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Aheader from '../components/Aheader'
import AFooter from '../components/Afooter'

function Feedback() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch()
  },[]);
  const fetch=async()=>{
    const res=await axios.get('http://localhost:3000/feedback');
    console.log(res);
    setData(res.data);
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
                    <th colSpan={8}><h1><i> <center>Feedback
                      </center></i></h1></th>
                  </tr>
                  <tr>
                    <th>id</th>
                    <th>Customer_Name</th>
                    <th>Review</th>
                    <th>Ratingof10</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                    data.map((value,index,arr)=>{
                      return(
                        <tr>
                          <td>{value.id}</td>
                          <td>{value.Customer_Name}</td>
                          <td>{value.Review}</td>
                          <td>{value.Ratingof10}</td>
                          <td className="center">
                            <button>Delete</button>
                            <button>Edit</button>
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
    </div><AFooter/></div>
  )
}

export default Feedback