import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const Update = () => {

  const[name, setName]= useState("");
  const[email, setemail] = useState("");
  const[age, setAge] = useState(0);
  const[picture, setPicture] = useState("");
  const [error, setError] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  const getSingleUser= async()=>{
   
    const response = await fetch(`http://localhost:5000/${id}`)
    const result= await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error)

    }
    if(response.ok){
     setError("");
     console.log(result)
     setName(result.name);
     setemail(result.email);
     setAge(result.age);
     setPicture(result.picture);
    }
  }


  const handleUpdate = async(e)=>{

    e.preventDefault();
    const updateUser = { name, email, age };
    
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    });

    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
     
      setError("");
      navigate("/add");

  }
}

  useEffect(()=>{
    getSingleUser();
  }, [])

  


  return (
    <div className='create-container'>
  {error && <div class="alert alert-danger">{error}</div>}
    
    <form  className="form" onSubmit={handleUpdate}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input  style={{width:"200px"}} type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp"
    value={name} onChange={(e)=> setName(e.target.value)}
    
    
    />
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input  style={{width:"200px"}} type="email" className="form-control" id="exampleInputemial"
     value={email} onChange={(e)=> setemail(e.target.value)}
    />
   
  </div>


  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Age</label>
    <input  style={{width:"200px"}} type="age" className="form-control" id="exampleInputage" aria-describedby="ageHelp"
    value={age} onChange={(e)=> setAge(e.target.value)}
    />
   
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Image</label>
    <input   style={{width:"200px"}}type="picture" className="form-control" id="exampleInputage" aria-describedby="ageHelp"
    value={picture} onChange={(e)=> setPicture(e.target.value)}
    />
   
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Update
