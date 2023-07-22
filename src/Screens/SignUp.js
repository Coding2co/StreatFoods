import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";


export default function SignUp() {
  const [credintals, setcredintals] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
     e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credintals.name,
        email: credintals.email,
        password: credintals.password,
        location: credintals.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.Success) {
      alert("   Invalid creditinals  \n 1.Name must be 5 character long. \n 2. Password must be 5 character long.");
    }
    else {
      alert("Signed Up  successfully .Log In now")
    }
  };
  const handleChange = (event) => {
    setcredintals({ ...credintals, [event.target.name ]: event.target.value });
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="p-2 w-50 m-auto mt-4 container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={credintals.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credintals.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credintals.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLocation" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLocation"
              name="geolocation"
              value={credintals.geolocation}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            SignUp</button>
          <Link className="btn btn-danger m-3" to="/login">
            Already a User
          </Link>
        </form>
      </div>
    </div>
  );
}
