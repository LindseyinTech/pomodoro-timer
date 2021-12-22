import React from "react";


export default function Finished( {session, currentDuration} ){
  if (!session){
    return null
  }
    
if(session.label==="On Break"){   
return (
<div className="row mb-2">
<div className="col">
<img src="https://gyazo.com/1d1c24af4d6f8d87f956ed914882478e.gif" alt="good job"/>
</div>
</div>

)

} if (session.label ==="Focusing"){
  return (
    <div className="row mb-2">
    <div className="col">
    <img src="https://gyazo.com/9723d0287272b2151764c82a852fbc26.gif" alt="time to focus"/>
    </div>
    </div>
    
    )

}
}
