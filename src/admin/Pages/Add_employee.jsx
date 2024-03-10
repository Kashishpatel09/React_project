import React, { useState } from 'react'
import axios from 'axios';
import Aheader from '../components/Aheader'
import AFooter from '../components/Afooter'

function Add_employee() {
    const [formvalue,setFormvalue]=useState({
        id:"",
        Name:"",
        BirthDate:"",
        ContactNumber:"",
        Email:"",
        Salary:"",
        Status:""
      });
    
      const getform=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
      }
    
      const submithandel = async (e) => {
        e.preventDefault(); // stop page reload 
        const res = await axios.post(`http://localhost:3000/employee`,formvalue);
        //console.log(res);
        if(res.status==201)
        {
          setFormvalue({...formvalue,Name:"",BirthDate:"",ContactNumber:"",Email:"",Salary:"",Status:"",});
          alert('employee submited success');
          return false;
        }
      }
  return (
    <div>
    <Aheader/>
    <div className="mb-3 px-3">
    <h1><br></br></h1>
  </div>
  <h1 ><center><i>Add Employee</i></center></h1>
  <form role="form" action="" method='post' onSubmit={submithandel}>
  <div className="mb-3 px-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control"  name='Name' value={formvalue.Name} onChange={getform}/>
  </div>
  <div className="mb-3 px-3">
    <label className="form-label">BirthDate</label>
    <input type="number" className="form-control" name='BirthDate' value={formvalue.BirthDate} onChange={getform}/>
  </div>
  <div className="mb-3 px-3">
    <label className="form-label">ContactNumber</label>
    <input type="number" className="form-control" name='ContactNumber' value={formvalue.ContactNumber} onChange={getform}/>
  </div>
  <div className="mb-3 px-3">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" name='Email' value={formvalue.Email} onChange={getform}/>
  </div>
  <div className="mb-3 px-3">
    <label className="form-label">Salary</label>
    <input type="number" className="form-control" name='Salary' value={formvalue.Salary} onChange={getform}/>
  </div>
  <div className="mb-3 px-3">
    <label className="form-label">Status</label>
    <textarea className="form-control"  type="text" name='Status' value={formvalue.Status} onChange={getform}/>
  </div>
  <div class="col-12 mb-3 px-3">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
  </form>
  <AFooter/>
</div>
  )
}

export default Add_employee