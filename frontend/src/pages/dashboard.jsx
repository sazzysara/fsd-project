
import { useState } from "react";
import { useLocation } from "react-router-dom";


function Dashboard() {

    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    function displaydata(){
        setUserdata(location.state)
        console.log(userdata)
    }
    return(
        <>
        <button onClick={displaydata}>Button</button>
        </>
    );
}
export default Dashboard;