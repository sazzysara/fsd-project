
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Dashboard() {

    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    
   {/* function displaydata(){
        setUserdata(location.state)
        console.log(userdata)
        */}
    useEffect(()=>{
        setUserdata(location.state);
    },)
    
    //const [count,setCount]=useState(0)
    //const [check,setCheck]=useState(2)
    {/*useEffect(()=>{
        console.log(count)
    },)
    */}

    return(
       //<button onClick={displaydata}>Button</button>
       <div>{userdata.username}
            {userdata.password}
        </div>

    );
}
export default Dashboard;