import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
function Black() {
    const blackRef=useRef(null)
    useGSAP(()=>{
        gsap.to(blackRef.current,{
            y:"-100%",
            delay:1.9,
            duration:0.8,
            
        })
        
    })

    

  return (
    <div>
        <div ref={blackRef} className=' h-screen bg-[#111] z-10 w-full fixed'>

</div>
    </div>
  )
}

export default Black
