import {React,useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import { Link,useNavigate } from "react-router-dom";


export default function Login() {

  const [credintals, setcredintals] = useState({
    email: "",
    password: "",
  });
 
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credintals.email,
        password: credintals.password,
      })
    });
    const json = await response.json();
     console.log(json);

   if(!json.Success){
    alert("Enter Valid credentials");
    console.log(json.success);
   }
   if(json.Success){
    localStorage.setItem("authToken",json.authToken);
    console.log(localStorage.getItem("authToken"));
    navigate("/");
   }

  }
  const handleChange = (event) => {
    setcredintals({ ...credintals, [event.target.name ]: event.target.value })
  }
 
  return (
    <div>
        <div><Navbar/></div>
        <div>
        <div className="p-2 w-50 m-auto mt-4 container">
        <form onSubmit={handleSubmit}>
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
         
          <button type="submit" className="btn btn-success">
            Log In
          </button>
          <Link className="btn btn-danger m-3" to="/createuser">
           I'm a New User
          </Link>
        </form>
      </div>
        </div>
        <div><Footer/></div>
    </div>
  );
}
