import { useState, useEffect } from "react";
import firebase from "../firebase/index";
import "bootstrap/dist/css/bootstrap.css";
function Details(props) {
  const [users, setUser] = useState([]);
  console.log(props);

  useEffect(() => {
    firebase
      .collection("users")
      .onSnapshot((snapshot) => {
        const users = snapshot.docs.map((doc) => {
          return doc.data();
        });
        console.log(users);
        setUser(users);
        props.setKabbadi(false);
        props.setSwimming(false);
        props.setReading(false);
      });
    
  }, []);

  //   const handleDelete = (users) => {
  //     console.log(users);
  //   };

  return (
    <div className="container">
      <div className="py-4">
        <h1>List of Users</h1>
        <table class="table border shadow mt-4">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Company</th>
              <th scope="col">Location</th>
              <th scope="col">Gender</th>
              <th scope="col">Hobbies</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.Name}</td>
                <td>{user.Designation}</td>
                <td>{user.Company}</td>
                <td>{user.Location}</td>
                {user.radioGender ? <td>Male</td> : <td>Female</td>}
                {user.kabbadi ? <td>Kabbadi</td> : <td></td>}
                {user.Swimming ? <td>Swimming</td> : <td></td>}
                {user.Reading ? <td>Reading</td> : <td></td>}
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button class="btn btn-danger" onClick={(e) => handleDelete(users)}>
          Delete
        </button> */}
      </div>
    </div>
  );
}

export default Details;
