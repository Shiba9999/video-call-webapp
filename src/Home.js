import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [roomID,setRoomID]=useState("")
    const navigate=useNavigate()
    function handleClick(){
        navigate(`/room/${roomID}`)
    }
  return (
    <div style={{display:"flex"}}>
      <input type="text" placeholder="enter"  onChange={(e)=>setRoomID(e.target.value)}/>
      <button onClick={handleClick}>Join</button>
    </div>
  );
};

export default Home;
