import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

const Add = () => {
  const[data, setData] = useState();
  const[error, setError] = useState();

  async function getData(){
    const response = await fetch("http://localhost:5000");
    const result= await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error)

    }
    if(response.ok){
      setData(result)
    }
  }


const handleDelete= async(id)=>{
  const response = await fetch(`http://localhost:5000/${id}`, {
    method:"DELETE"
  })

  const result = await response.json();

  if(!response.ok){
    console.log(result.error);
    setError(result.error)
  }

  if(response.ok){
    setError("Deleted successfully");

    setTimeout(()=>{
      setError("");
      getData();
    }, 1000)
  }

}




  useEffect(()=>{
    getData();
  }, [])

  console.log(data)



  return (
    <div className='add-container' style={{marginTop:"20px", marginLeft:"200px"} }>
       {error && <div class="alert alert-danger">{error}</div>}

      {data?.map((item)=>(
         <div className="card" key={item._id} style={{width:"18rem"}}>
         <div className="card-body">
           <h5 className="card-title">{item.name}</h5>
           <h6 className="card-subtitle mb-2 text-body-secondary">{item.email}</h6>
           <p className="card-text">{item.age}</p>
           <img  className="add-img" src={item.picture} alt="img"/>
           <button className='add-button' onClick={()=>handleDelete(item._id)}>Delete</button>
           
           <Link to={`/${item._id}`}> <button  className='add-button'>Update</button></Link>
          
          
         </div>
       </div>

      ))}
     
    
    </div>
  )
}

export default Add
