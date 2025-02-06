import React from "react";

function Result(props){ 

return(
<div >

  {props.data?.Name}

  {props.data?.Email}

  {props.data?.password}
  
 </div>
)


}
export default Result