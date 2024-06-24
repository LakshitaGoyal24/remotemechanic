import React from "react";
import {useForm} from 'react-hook-form'
import {useNavigate,Link} from 'react-router-dom'


function Register() {

  let {register,handleSubmit}=useForm()
  let navigate=useNavigate()

  //form submit
  function onRegisterFormSubmit(newUser){
    //hash password
    
    //replace plain password with hashed password
    
    
    //make HTTP POST req to create user in API
    fetch('http://localhost:4000/users',{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify(newUser)
    })
    .then(res=>{
      if(res.status===201){
        //navigate to Login page
        navigate('/login')
      }
    })
    .catch(err=>console.log("err in registration",err))

  }

  return (
    <div className="bg-white w-100 h-100">
      <h1 className="display-3 text-info text-center">User Registration form</h1>
      <form action="" className="w-50 mx-auto mt-5 bg-light p-4" onSubmit={handleSubmit(onRegisterFormSubmit)}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" {...register("username")} id="username" className="form-control mb-4" />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" {...register("password")} id="password" className="form-control mb-4" />
        </div>
         {/* password */}
         <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" {...register("email")} id="email" className="form-control mb-4" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="number" {...register("phone")} id="phone" className="form-control mb-4" />
        </div>
        <button type="submit" className="btn btn-success btn-info text-secondary d-block mx-auto fs-5">
          Register
        </button>
      </form>
      <p className="lead text-center">
        Already registered !
          <Link to='/login' className="fs-4 ps-3">Login</Link>
        </p>
    </div>
  );
}

export default Register;