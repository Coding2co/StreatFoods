import React,{useState,useEffect} from 'react'
// import * as ReactDOM from "react-dom/client";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Carsouel from '../Components/Carsouel'
export default function Home() {

  const [foodCat,setfoodcat] =useState([]);
  const [foodItem,setfoodItem] = useState([]);

  const loadData= async()=>{
    let response = await fetch("http://localhost:5000/api/foodata",{
      method:"POST",
      headers:{
        'content-Type':"application/json"
      }
    })
    response= await response.json();
    console.log(response[0],response[1]);
  }

  useEffect(()=>{  //again changes occur it will run
    loadData()
  },[])







  return (
    <div>
        <div><Navbar/></div>
        <div><Carsouel/></div>

        <div className='m-3'>

        <Card/>

        </div>
        <div><Footer/></div>
    </div>
  )
}
