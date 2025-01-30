import {useForm} from "react-hook-form"
import React, {useState} from 'react';
import Result from "./Result";
function Input() {
    const [formValues, setFormValues] = useState()
   const {register, handleSubmit,  } = useForm({
     defaultValues: {
         Name: "",
         Email:"",
         Password: ""
      }
   })
   const onSubmit = data => setFormValues(data) 
   
return (
<div>
 <form onSubmit={handleSubmit(onSubmit)}>
    
     <input type="text" {...register("Name", {minLength: 3, required: true, maxLength: 20 })} 
     placeholder="Name" />

        
     <input   type="text" required  {...register("Email", {required: true, pattern: /^\S+@\S+$/i} )} 
        placeholder="Email" />
        
     <input type="password" {...register("Password", { minLength: 8, required: true, maxLength: 20 })} 
        placeholder="Password" />
       

     <input type="submit"/>
 </form>
 <Result data={formValues}/>
 </div>  
)

}

export default Input