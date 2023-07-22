// import * as ReactDOM from "react-dom/client";
import "./App.css";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Screens/SignUp";
import Orders from "./Screens/Orders";
import Mycart from "./Screens/Mycart";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route extact path="/createuser" element={<SignUp />} />
          <Route extact path="/orders" element={<Orders/>}></Route>
          <Route extact path="/mycart" element={<Mycart/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
