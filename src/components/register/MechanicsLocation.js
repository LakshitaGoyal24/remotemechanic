import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import Mechanic from "./Mechanic";

function MechanicsLocation() {
  //state
  let [users, setUsers] = useState([]);
  let { state } = useLocation();
  console.log(state);
  useEffect(() => {
    fetch(`http://localhost:4000/mechanics?location=${state}`)
      .then((res) => res.json())
      .then((usersData) => setUsers(usersData));
  });
  return (
    <div>
      <h1 className="display-1 bg-info text-white text-center">Mechanics List</h1>
      <div className="container d-flex flex-wrap mt-5">
        {users.map((user) => (
          <Mechanic
            key={user.id}
            userData={user}
          />
        ))}
      </div>
    </div>
  );
}

export default MechanicsLocation;
