import { useState, useEffect } from "react";
import firebase from "../firebase/index";
import "bootstrap/dist/css/bootstrap.css";
function Details(props) {
  const [users, setUser] = useState([]);

  useEffect(() => {
    firebase
      .collection("users")
      .get()
      .then((snapshot) => {
        const users = snapshot.docs.map((doc) => {
          return doc.data();
        });
        console.log(users);
        setUser(users);
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
