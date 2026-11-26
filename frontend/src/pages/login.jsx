import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login() {
  //const blah blah
  {/* const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");
  function Print(){
    console.log("Printing the print function")
    console.log(email,pass)
    */}
    const navigate=useNavigate();
    const[formdata,setFormdata]=useState( {
        username:"",
        password:""
    });
    function handlesubmit(e) {
        e.preventDefault();
        console.log("Login Page")
        console.log(formdata.username)
        console.log(formdata.password)
        alert("Login Successful")
        navigate("/dashboard",{
            state:formdata
        })
        
    }
    function handlechange(e) {
    setFormdata({
        ...formdata,
        [e.target.name]:e.target.value
    });
    }
    function Print(){
        console.log(formdata)
    }
  
    
  return (

  <>
  {/*
    <div className="text-blue-500 text-5xl font-bold">HI</div>
    <input type="text" required placeholder="Enter your email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    <input type="password" required placeholder="Enter your password" name="password" value={pass} onChange={(e)=>setPass(e.target.value)}></input>
    <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
    <button type="submit" onClick={()=>Print()}>submit</button>
  */}
<form action="">
    <div className="text-blue-500 text-5xl font-bold">HI</div>
    <input type="text" required placeholder="username" name="username"  onChange={handlechange}></input>
    <input type="password" required placeholder="Enter your password" name="password"  onChange={handlechange}></input>
    {/* <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button> */}
    <button type="submit" onClick={handlesubmit}>submit</button>
</form>
  </>
    
  );
}
export default Login;