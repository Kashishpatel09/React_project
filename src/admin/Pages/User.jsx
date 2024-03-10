import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Aheader from '../components/Aheader'
import AFooter from '../components/Afooter'
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function User() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch()
  },[]);
  const fetch=async()=>{
    const res=await axios.get('http://localhost:3000/user');
    console.log(res);
    setData(res.data);
  }
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    fetch();
  }
  const[formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        img:"",
        status:"",
  });
  const editdata = async(id)=>{
    const res= await axios.get()
    console.log(res.data);
    setFormvalue(res.data);
  }
  const getform=(e)=>{
    setFormvalue({...formvalue,[e.target.name]:e.target.value});
    console.log(formvalue);

  }
  const validation=()=>{
    var result=true;
    if(formvalue.name=="")
    {
      toast.error('name Field is required');
            result=false;
            return false;
    }
    if(formvalue.email=="")
    {
      toast.error('email Field is required');
        result=false;
        return false;
    }
    if(formvalue.password=="")
    {
      toast.error('password Field is required');
        result=false;
        return false;
    }
    if(formvalue.mobile=="")
    {
      toast.error('mobile Field is required');
        result=false;
        return false;
    }
    
    if(formvalue.status=="")
    {
      toast.error('status Field is required');
        result=false;
        return false;
    }
    const submithandel = async (e) => {
      e.preventDefault(); // stop page reload
      if(validation())
      {
        const res = await axios.patch(`http://localhost:3000/user/${formvalue.id}`,formvalue);
        console.log(res);
        if(res.status==200)
        {
          setFormvalue({...formvalue,address:"",textarea:""});
          toast.success('Update success');
          fetch();
        }
      }
    }
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
                    <th colSpan={8}><h1><i> <center>User Information</center></i></h1></th>
                  </tr>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>mobile</th>
                    <th>img</th>
                    <th>status</th>
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
                          <td>{value.password}</td>
                          <td>{value.mobile}</td>
                          
                          <td>{value.img}</td>
                          <td>{value.status}</td>
                          <td className="center">
                            <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
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
    <AFooter/></div>
  )
}

export default User