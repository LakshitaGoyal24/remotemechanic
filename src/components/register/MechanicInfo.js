import React from "react";
import { useLocation} from "react-router-dom";


function MechanicInfo() {
  let { state } = useLocation();
  console.log(state);

  return (
    <div className="p-5">
      <div className="">
        <h2 className="display-4">{state.name}</h2>
        <p className="lead text-secondary">working at {state.location}</p>
        <img src={state.image} alt="" width="200px" className="rounded-4"/>
        <p className="lead">{state.about}</p>
        <h4 className="display-4 text-info">Certifications</h4>
        <ul>
        {state.certifications.map((certificate)=>(<li>{certificate}</li>))}
        </ul>
        <h4 className="display-4 text-info">Expertise</h4>
        <ul>
        {state.expertise.map((certificate)=>(<li>{certificate}</li>))}
        </ul>
        <h4 className="display-4 text-info">Reviews</h4>
        <ul>
        {state.reviews.map((certificate)=>(<li><h6>{certificate.customer}</h6> <p>{certificate.comment} </p> </li>))}
        </ul>
        <h4 className="display-4 text-info">Service Commitment</h4>
        <p className="lead">{state.service_commitment}</p>
        <h4 className="display-4 text-info">Contact</h4>
        <p>Phone : {state.contact.phone} </p> 
        <p>Email : {state.contact.email} </p>
        
        </div>
      
    </div>
  );
}

export default MechanicInfo;