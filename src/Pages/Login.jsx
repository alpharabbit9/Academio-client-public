
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa6";
import './Backgound/LoginBack.css'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProivder";
import Swal from "sweetalert2";

export function Login() {

  const {setUser,createGoogleUser,UserLogIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) =>{

    e.preventDefault();

    const email = e.target.email.value ;
    const password = e.target.password.value ;

    console.log(email,password);

    UserLogIn(email,password)
    .then(res=>{
      console.log(res.user);
      setUser(res.user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Welcome Back",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
    .catch(error =>{
      console.log(error.message);
  })
  }

  const HandleGoogle = () =>{

    createGoogleUser()
    .then(res =>{
      console.log(res.user)
      setUser(res.user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Welcome Back",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error =>{
      console.log(error.message);
    })

  }



  return (
    <div className="mx-auto ">
       
        <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 mx-auto py-36 border-blue-950 ">
        <h2 className="text-3xl font-bold text-center mb-3">SIGN IN NOW</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput name="email" id="email1" type="email" placeholder="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="password" />
        </div>
        <TextInput name="password" id="password1" type="password" placeholder="password" required />
      </div>
      <div className="flex items-center gap-2">
        
        
        <Label className="ml-3" htmlFor="remember">Forgot Password?</Label>
        <br />
        <p className="font-semibold">New here? <Link to={'/register'}> Sign in now</Link></p>
      </div>

      <Button type="submit">Sign in</Button>
      <Button onClick={HandleGoogle} color="light">Login with Google</Button>
    </form>
    </div>
  );
}
