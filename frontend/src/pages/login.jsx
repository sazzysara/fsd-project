import { useState } from "react";


function Login() {
  //const blah blah
  const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");
  function Print(){
    console.log("Printing the print function")
    console.log(email,pass)
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
    <input type="text" required placeholder="Enter your email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    <input type="password" required placeholder="Enter your password" name="password" value={pass} onChange={(e)=>setPass(e.target.value)}></input>
    <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
    <button type="submit" onClick={()=>Print()}>submit</button>
</form>
  </>
    
  );
}
export default Login