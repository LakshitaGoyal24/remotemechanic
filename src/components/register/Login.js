import React from "react";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";


function Login() {
  let { register, handleSubmit } = useForm();
  let navigate=useNavigate()

  //form submit
  function onLoginFormSubmit(userCrdentialsObject) {
    fetch(
      `http://localhost:4000/users?username=${userCrdentialsObject.username}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((userObjArray) =>{
        if(userObjArray.length===0){
          alert("Invalid Username")
        }else{
          //compare passwords
          let result=(userCrdentialsObject.password===userObjArray[0].password)
         //if passwords are matched
         if(result===true){
          //navigate to UserDashboard by passing userObj as state
            navigate(`/user-dashboard/${userCrdentialsObject.username}`,{state:userObjArray[0]})
         }else{
          alert("Invalid password")
         }
        }
      } );
  }

  return (
    <div>
      <h1 className="display-3 text-info text-center">User Login form</h1>
      <form
        action=""
        className="w-50 mx-auto mt-5 bg-light p-4"
        onSubmit={handleSubmit(onLoginFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            id="username"
            className="form-control mb-4"
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            className="form-control mb-4"
          />
        </div>

        <button
          type="submit"
          className="btn btn-info text-secondary d-block mx-auto fs-5"
        >
          Login
        </button>
      </form>

      <p className="lead text-center">
        New User !
        <Link to="/register" className="fs-4 px-3">
          Register
        </Link>
        here
      </p>
    </div>
  );
}

export default Login;