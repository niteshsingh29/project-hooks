import Navbar from "./components/Navbar";
import Details from "./components/Details";
import { useState, useEffect } from "react";
import firebase from "./firebase/index";

function App() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [isAddUser, setIsAddUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDesignation("");
    setCompanyName("");
    setLocation("");
    setName("");

    firebase.collection("users").add({
      Name: name,
      Designation: designation,
      Company: companyName,
      Location: location,
      created: new Date(),
    });
    setIsAddUser(true);
    console.log("data sent successfully");
  };

  const fun = (isAddUser) => {
    setIsAddUser(isAddUser)
  }

  return (
    <>
      <Navbar />
      <div className="add-user">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Name</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="form-field">
            <label>Designation</label>
            <input
              value={designation}
              type="text"
              onChange={(e) => setDesignation(e.target.value)}
            ></input>
          </div>

          <div className="form-field">
            <label>Company Name</label>
            <input
              value={companyName}
              type="text"
              onChange={(e) => setCompanyName(e.target.value)}
            ></input>
          </div>

          <div className="form-field">
            <label>Location</label>
            <input
              value={location}
              type="text"
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </div>
          <button className="add-user-btn">Add User</button>
        </form>
      </div>
      <Details isAddUser={isAddUser} setIsAddUser={fun} />
    </>
  );
}

export default App;
