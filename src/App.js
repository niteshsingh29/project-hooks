import Navbar from "./components/Navbar";
import Details from "./components/Details";
import { useState, useEffect } from "react";
import firebase from "./firebase/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

function App() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  //const [isAddUser, setIsAddUser] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isKabbadi, setKabbadi] = useState(false);
  const [isSwimming, setSwimming] = useState(false);
  const [isReading, setReading] = useState(false);

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
      radioGender: isChecked,
      created: new Date(),
      kabbadi: isKabbadi,
      Swimming: isSwimming,
      Reading: isReading,
    });
    //setIsAddUser(true);

    console.log("data sent successfully");

    if (isChecked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  // const fun = (isAddUser) => {
  //   setIsAddUser(isAddUser);
  // };
  const handleKabbadi = (iskabbadi) => {
    setKabbadi(iskabbadi);
  }
  const handleSwimming = (isSwimming) => {
    setKabbadi(isSwimming);
  }
  const handleReading = (isReading) => {
    setKabbadi(isReading);
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
          <input
            type="radio"
            value="Male"
            name="gender"
            className="mx-2"
            onChange={() => setChecked(true)}
          />
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            className="mx-2"
            onChange={() => setChecked(false)}
          />
          Female
          <div className="form-field">
            <label style={{ fontSize: "20px", fontWeight: "bold" }}>
              Hobbies
            </label>
            <div>
              Kabbadi{" "}
              <input
                onChange={() => setKabbadi(true)}
                type="checkbox"
                name="hobby"
                value="kabbadi"
                multiple="true"
                
              /><input type="reset"/>
              Swimming
              <input
                onChange={() => setSwimming(true)}
                type="checkbox"
                name="hobby"
                value="Swimming"
              />
              Reading{" "}
              <input
                onChange={() => setReading(true)}
                type="checkbox"
                name="hobby"
                value="Reading"
              />
            </div>
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
      <Details isKabbadi={isKabbadi} setKabbadi={handleKabbadi} setSwimming={handleSwimming} setReading={handleReading}/>
    </>
  );
}

export default App;
