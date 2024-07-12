import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'
function HeroText() {

  const textRef=useRef(null)

  useGSAP(()=>{
  let clutter=""
  const splittedText =textRef.current.textContent.split("")

  splittedText.forEach(function(e){
    clutter+=`<span>${e}</span>`
  })
  textRef.current.innerHTML=clutter

  gsap.from("h1 span",{
    y:100,
    opacity:0,
    delay:2.15,
    stagger:0.15
  })
}) 
  
  return (
    <div>
      <h1 ref={textRef} className='whitespace-nowrap font-black font-[u8] uppercase text-[17vw] leading-none'>Arock</h1>
    </div>
  )
}

export default HeroText
