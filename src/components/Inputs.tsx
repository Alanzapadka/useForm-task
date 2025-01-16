import {useForm} from "react-hook-form"
import React, {useState} from 'react';
function Input() {
   const {register, handleSubmit, formState: { errors} } = useForm({
      defaultValues: {
         Name:"",
         Email:"",
         Password:"",
      }
   })
    console.log(errors)
    const [formValues, setFormValues] = useState();




return (
 <form onSubmit={handleSubmit((data) => setFormValues(formValues))}>

     <input required {...register("Name", {minLength: 3, required: "name needs to be atleast 3 letters long"})} 
     placeholder="Name" />
     <p>{errors?.Name?.message}</p>
        
     <input required  {...register("Email" )} 
        placeholder="Email" />
        
     <input {...register("Password", { minLength: 8, required: "Password need to be atleast 8 letters long"})} 
        placeholder="Password" />
       <p>{errors?.Password?.message}</p>

     <input type="submit"/>
 </form>
   
)
}

export default Input