import "./User.css";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function Mechanic({ userData}) {
  //state
  let [showCompanyInfo, setShowStatus] = useState(false);
  let [buttonText, setButtonText] = useState("Add User");
  let navigate=useNavigate()

  let gotoUser = function () {
    navigate(`/mechanicInfo/${userData.name}`,{state:userData})
  };

  let changeButton = function () {
    if (buttonText === "Add User") setButtonText("Remove User");
    else setButtonText("Add User");
  };

  return (
    <div className="card bg-light shadow m-3">
      <div className="card-header bg-dark text-light">
        <h3 className="lead fs-3 fw-light">
          {userData.name}
        </h3>
        
      </div>
        <div className="card-body bg-light text-dark">
        <p className="text-info">Works at :{userData.location} </p>
        <p>About:{userData.about}</p>
        <button className="btn btn-success ms-5" onClick={gotoUser}>More Info</button>
        </div>
      
    </div>
  );
}

export default Mechanic;
