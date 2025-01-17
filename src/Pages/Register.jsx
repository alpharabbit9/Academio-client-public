
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa6";
import './Backgound/LoginBack.css'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProivder";
import { useContext } from "react";
import Swal from "sweetalert2";


export function Register() {

  const {createUser ,setUser ,updateUserProfile, createGoogleUser} = useContext(AuthContext);
  const navigate = useNavigate()


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

    

    const HandleSubmit  = (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name,email,password,photo);


        createUser(email,password)
        .then(res =>{
          // console.log(res.user);
          setUser(res.user);
          updateUserProfile({displayName : name , photoURL : photo})
          .then(res =>{
            navigate('/');
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Welcome Back",
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch(error =>{
            console.log(error.message)
          })

        })
        .catch(error =>{
          console.log(error)
        })
    }
  return (
    <div className="mx-auto ">
       
        <form onSubmit={HandleSubmit} className="flex max-w-md flex-col gap-4 mx-auto py-36 border-blue-950 ">
        <h2 className="text-3xl font-bold text-center mb-3">SIGN UP NOW</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Name" />
        </div>
        <TextInput name="name" id="name1" type="text" placeholder="name" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="photo1" value="Photo URL" />
        </div>
        <TextInput name="photo" id="photo1" type="text" placeholder="photo" required />
      </div>
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
      <div className=" gap-2">
        
        
        <Label className="ml-3" htmlFor="remember">Forgot Password?</Label>
        <br />
        <p className="font-semibold">Already have an Account? <Link to={'/login'}> Sign in now</Link></p>
      </div>

      <Button type="submit">Sign Up</Button>
      <Button onClick={HandleGoogle} color="light">Login with Google</Button>
    </form>
    </div>
  );
}
