import React from "react";
import { useLocation,useNavigate,Link} from "react-router-dom";
import {useForm} from 'react-hook-form'

function UserDashBoard() {
  let {register,handleSubmit}=useForm()
  let navigate=useNavigate()

  function onLocationSearch(userCrdentialsObject) {
    fetch(
      `http://localhost:4000/mechanics?location=${userCrdentialsObject.location}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((userObjArray) =>{
        if(userObjArray.length===0){
          alert("Sorry! No Mechanics available in your area.")
        }else{
          //compare passwords
            navigate('/mechanicsLocation',{state:userCrdentialsObject.location})
            console.log(userObjArray);
        }
      } );
  }

  return (
    <div className="p-5">
      <div className="text-end float-end">
        <p className="lead text-primary display-6">In case of emergency no need to login</p>
      </div>
      <div className="float-start bg-dark p-5 rounded-4 w-50">
        <h4 className="display-4 text-light">Find a mechanic in your area</h4>
      <form action="" className="w-75 mx-auto mt-5 bg-light p-4" onSubmit={handleSubmit(onLocationSearch)}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" {...register("location")} id="location" className="form-control mb-4" />
        </div>
        <button type="submit" className="btn btn-success btn-info text-secondary d-block mx-auto fs-5">
          Search
        </button>
      </form>
      <p className="lead text-info m-4">Else search through our entire mechanics database</p>
      <Link to="/mechanics" className="fs-4 px-3">
          All Mechanics
        </Link>
      </div>
    </div>
  );
}

export default UserDashBoard;