
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../components/FormSchema/api";


function Dashboard() {

    const location=useLocation();
    const[userdata,setUserdata]=useState({});
    
   {/* function displaydata(){
        setUserdata(location.state)
        console.log(userdata)
        */}
    useEffect(()=>{
        setUserdata(location.state);
    },[])
    
    //const [count,setCount]=useState(0)
    //const [check,setCheck]=useState(2)
    {/*useEffect(()=>{
        console.log(count)
    },)
    */}
    const checkendpoint=async ()=>{
        const response =await API.get("/api/get");
        console.log(response.data.message);
    }

    return(
       //<button onClick={displaydata}>Button</button>
    <>
    <div>{userdata.username}</div>
    <div>{userdata.password}</div>
    <button onClick={checkendpoint}>Button</button>
    </>
            

    );
}
export default Dashboard;