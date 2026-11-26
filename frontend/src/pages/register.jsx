import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/FormSchema/registerschema";


function Register(){
    const navigate=useNavigate();
    const{register,handleSubmit,formState:{errors}}= useForm({
        resolver: zodResolver(registerschema)
    })
function onSubmit1(data){
    console.log(data)
    alert("register success")
    navigate("/")
}
return(
    <form onSubmit={handleSubmit(onSubmit1)}>
    <div className="text-blue-500 text-5xl font-bold">HI</div>
    <input type="text" placeholder="Enter your name" {...register("name")}></input>
    <p>{errors.name?.message}</p>
    <input type="email" placeholder="Enter your email" {...register("email")}></input>
    <p>{errors.email?.message}</p>
    <input type="password" placeholder="Enter your password" {...register("password")}></input>
    <p>{errors.password?.message}</p>
    <input type="number" placeholder="Enter your age" {...register("age")}></input>
    <p>{errors.age?.message}</p>
    <button type="submit">submit</button>
</form>

)

}
export default Register