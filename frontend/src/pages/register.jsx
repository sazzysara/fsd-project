import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/FormSchema/registerschema";
import Login from "./login";
function Register(){
    const navigate=useNavigate();
    const{register,handleSubmit,formState:{errors}}= useForm({
        resolver: zodResolver(registerschema)
    })
function onSubmit1(data){
    console.log(data)
    alert("register success")
    navigate("/",{
        state: data
    })
}
return(
    <form onSubmit={handleSubmit(onSubmit1)}>
    {/* <div className="text-blue-500 text-5xl font-bold">HI</div> */}
    <div className="flex justify-center items-center min-h-screen">
        <div className="border-2 border-gray-800 rounded-2xl p-5 flex flex-col items-center gap-3 ">
        <h2 className="flex flex-col justify-center font-bold text-purple-600">Register Details</h2>
        <input className="border border-gray-500 p-2 rounded-xl w-50" type="text" placeholder="Enter your name" {...register("name")}></input>
    <p>{errors.name?.message}</p>
    <input className="border border-gray-500 p-2 rounded-xl w-50" type="email" placeholder="Enter your email" {...register("email")}></input>
    <p>{errors.email?.message}</p>
    <input className="border border-gray-500 p-2 rounded-xl w-50" type="password" placeholder="Enter your password" {...register("password")}></input>
    <p>{errors.password?.message}</p>
    <input className="border border-gray-500 p-2 rounded-xl w-50" type="number" placeholder="Enter your age" {...register("age")}></input>
    <p>{errors.age?.message}</p>
    <button className="border border-purple-800 text-white font-bold p-2 rounded-2xl w-50 bg-purple-500 hover:bg-blue-800" type="submit">Submit</button>
    </div>
    </div>
</form>

)

}
export default Register