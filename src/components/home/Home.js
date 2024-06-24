import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
function Home() {
  return (
    <div className="home p-4">
      <h1 className="display-2 text-primary ">Welcome!</h1>
      
      <p className="lead text-white w-75 mx-auto bg-dark p-5  rounded-5">
      "Welcome to RemoteAutoCare – Your Trusted Partner for Vehicle Repairs in Hard-to-Reach
       Places! At RemoteAutoCare, we understand the challenges of navigating the vast and remote 
       terrains. Our skilled mechanics are dedicated to bringing top-notch automotive repair services 
       directly to your doorstep, no matter how far off the beaten path you may be. From routine maintenance
        to complex repairs, we specialize in providing reliable and efficient solutions for all types
         of vehicles in the most remote areas. Experience peace of mind knowing that help is just a click 
         or call away with RemoteAutoCare – Where Expertise Meets the Wilderness!"
      </p>
      <p className="lead text-info text-center bg-secondary p-3 w-25 rounded-3 float-end mt-5">
        New User? <br/> Sign Up Here!
        <Link to='/register' className="fs-4 ps-3 text-white">Register</Link>
      </p>
    </div>
  );
}

export default Home;