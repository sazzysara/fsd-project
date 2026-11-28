import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



function Login() {
  //const blah blah
  {/* const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");
  function Print(){
    console.log("Printing the print function")
    console.log(email,pass)
    */}
    const navigate=useNavigate();
    const[logindata,setLogindata]=useState( {
        username:"",
        password:""
    });
    const location=useLocation();
    const registerdata=location.state

    const handlesubmit=(e)=> {
        e.preventDefault();
        console.log("Login Page")
        {/*console.log(formdata.username)
        console.log(formdata.password)*/}
        console.log("login data",logindata)
        console.log("register data",registerdata)
        {/*alert("Login Successful")
        navigate("/Dashboard",{
            state:logindata
        })*/}
        if(registerdata.name===logindata.username && registerdata.password===logindata.password ){
            console.log("successful")
            navigate("/Dashboard",{
              state: logindata
            })
        }else{
          console.log("not valid")
        }
        
    }
    function handlechange(e) {
    setLogindata({
        ...logindata,
        [e.target.name]:e.target.value
    });
    }
    function Print(){
        console.log(logindata)
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 border-purple-500 flex flex-col justify-center items-center gap-3">
         <label className="font-bold">Name</label>
         <input type="text" required placeholder="username" name="username"  onChange={handlechange}></input>
         <label className="font-bold">Password</label>
         <input type="password" required placeholder="Enter your password" name="password"  onChange={handlechange}></input>
         {/* <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button> */}
         <button type="submit" onClick={handlesubmit}>submit</button>

      </div>
    </div>
</form>
  </>
  );
}
export default Login;