import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Create = () => {


  const[name, setName]= useState("");
  const[email, setemail] = useState("");
  const[age, setAge] = useState(0);
  const[picture, setPicture] = useState("");
  const [error, setError] = useState("");

  console.log(name, email, age, picture)


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var addUser = { name, email, age, picture };
    console.log(addUser);
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setName("");
      setemail("");
      setAge(0);
      setPicture("");
      setError("");
      navigate("/add");
    }
  };

  console.log(error)

  return (

    <div className='create-container'>

      {error && <div class="alert alert-danger">{error}</div>}

    <form className="form" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input  style={{width:"200px"}} type="name" className="form-control " id="exampleInputname" aria-describedby="nameHelp"
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
    <input   style={{width:"200px"}} type="picture" className="form-control" id="exampleInputage" aria-describedby="ageHelp"
    value={picture} onChange={(e)=> setPicture(e.target.value)}
    />
   
  </div>
 
  <button  style={{width:"200px"}} type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Create
