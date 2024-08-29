import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {

  const imgRef = useRef(null)
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [rotating, setRotating] = useState(0)

  const btnClicked = () => {
    setMoveX(Math.random() * 85);
    setMoveY(Math.random() * 75);
    setRotating(Math.random()*360 )
  };
  useGSAP(
    function () {
      gsap.to(imgRef.current, {
        left: `${moveX}%`,
        top: `${moveY}%`,
        rotate:`${rotating}deg`,
        duration:0.2
      });
    },
    [moveX,moveY,rotating]
  );

  return (
    <div>
      <img
      ref={imgRef}
        src="https://img.freepik.com/free-vector/housefly-white-background_1308-81423.jpg"
        alt=""
      />
      <button onClick={btnClicked}>Move</button>
    </div>
  );
};

export default App;
