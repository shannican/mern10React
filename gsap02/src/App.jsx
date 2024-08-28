import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const boxRef = useRef(null)

  const [moveX, setMoveX] = useState(0)
  const [moveY, setMoveY] = useState(0)


  const forwardClicked = ()=>{
    setMoveX(moveX+100)
    setMoveY(moveY+50)
  }

  const backClicked = ()=>{
    setMoveX(moveX-100)
    setMoveY(moveY-50)
  }

  useGSAP(function(){
    gsap.to(boxRef.current,{
      x:moveX,
      y:moveY,
      duration:1,
    })
  },[moveX,moveY])
  return (
    <div>
      <div ref={boxRef} id="box"></div>

      <button onClick={backClicked}>Move back</button>
      <button onClick={forwardClicked}>Move forward</button>

    </div>
  );
};

export default App;
