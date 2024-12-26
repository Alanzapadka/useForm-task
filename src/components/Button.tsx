import React from "react"
import {useForm, SubmitHandler} from "react-hook-form"
import { IFormInput } from "./Inputs"

function Button(){
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)


 
  return (  
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} />
      <input type="email" {...register("Email")} />
      <input  {...register("Password")} />
        <button  className="Button_S">Submit</button>     
    </form>
  )

}
export default Button


