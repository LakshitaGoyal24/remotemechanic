import React from "react";
import {NavLink} from 'react-router-dom'
import './NavigationBar.css'


function NavigationBar() {
  return (
    <ul className="nav justify-content-end bg-dark text-white p-3 fs-5">
      {/* link to Home  */}
      <li className="nav-item">
        <NavLink className="nav-link" to=" ">
          Home
        </NavLink>
      </li>
       {/* link to Register  */}
       <li className="nav-item">
        <NavLink className="nav-link" to="register">
          Register
        </NavLink>
      </li>
       {/* link to Login  */}
       <li className="nav-item">
        <NavLink className="nav-link" to="login">
          Login
        </NavLink>
      </li>
       {/* link to Tech  */}
       <li className="nav-item">
        <NavLink className="nav-link text-warning" to="emergency">
          Emergency!!
        </NavLink>
      </li>
   
    </ul>
  );
}

export default NavigationBar;