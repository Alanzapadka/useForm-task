import React from "react";
function Result(props){ 
  console.log(props)
return(
<div >
  
  {props.Name}
  {props.Email}
  {props.password}
 </div>
)


}
export default Result