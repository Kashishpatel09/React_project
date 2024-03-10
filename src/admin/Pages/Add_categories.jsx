import React, { useState } from 'react'
import axios from 'axios';
import Aheader from '../components/Aheader'
import AFooter from '../components/Afooter'

function Add_categories() {
  const [formvalue,setFormvalue]=useState({
    id:"",
    Categories_Title:"",
    Name:""
  });

  const getform=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/categories`,formvalue);
    //console.log(res);
    if(res.status==201)
    {
      setFormvalue({...formvalue,Categories_Title:"",Name:""});
      alert('categories submited success');
      return false;
    }
  }
  return (
    <div>
    <Aheader/>
    <div className="mb-3 px-3">
    <h1><br></br></h1>
  </div>
  <h1 ><center><i>Add Categories</i></center></h1>
  <form role="form" action="" method='post' onSubmit={submithandel}>
  <div className="mb-3 px-3">
    <label className="form-label">Categories_Title</label>
    <input type="text" className="form-control" name='Categories_Title' value={formvalue.Categories_Title} onChange={getform}/>
  </div>
  <div className="mb-3 px-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" name='Name' value={formvalue.Name} onChange={getform}/>
  </div>
  <div class="col-12 mb-3 px-3">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
  </form>
  <AFooter/>
</div>
  )
}

export default Add_categories