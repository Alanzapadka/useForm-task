import {useForm} from "react-hook-form"
import React from 'react';

export interface IFormInput {
    Name: string;
    Email: string;
    Password: string;
}

function Input() {
  const {register} = useForm<IFormInput>() 
    
return (
 <form>
     <input {...register("Name", {minLength: {value: 3, message: "min length is 3"}, 
        required: "This input is required"})} placeholder="Name" />
    
     <input {...register("Email", {required: "This input is required"})} 
        placeholder="Email" />
        
     <input {...register("Email", {required: "This input is required", minLength: {value: 8, message: "min length is 8"}})} 
        placeholder="Password" />
         
 </form>
   
)
}

export default Input