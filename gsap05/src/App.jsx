import React from 'react'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const App = () => {
  const boxRef = useRef(0)

  gsap.registerPlugin(ScrollTrigger)



  useGSAP(function(){
    gsap.from(boxRef.current,{
      scale:0,
      opacity:0,
      rotate:360,
      duration:2,
      scrollTrigger:{
        trigger:boxRef.current,
        scroller:"body",
        markers:true,
        start:'top 60%'
      }
    })
  })
  

  return (
    <div>
      <div id="page1"></div>
      <div id="page2">
        <div ref={boxRef} id="box"></div>
      </div>
      <div id="page3"></div>
      <div id="page4"></div>
    </div>
  )
}

export default App