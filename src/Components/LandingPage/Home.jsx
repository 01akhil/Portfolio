import React from 'react'
import Navbar from '../navbar/Navbar'
import CenterText from '../navbar/center/CenterText'
import Black from './Black'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import ParallaxComponent from '../ParallaxComponent'
function Home(props) {
  
    const homeRef=useRef(null)
    const pageRef=useRef(null)
    

    useGSAP(()=>{
        
        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.8,
            duration:1,
            scale:1.05,
            y:50
        })
    })


  return (
    <div>
        
    <Black/>

    <div ref={pageRef} className=' opacity-1 h-[100vh] w-full  '>

    <Navbar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
      <ParallaxComponent />    
      <CenterText/>
    </div>
    </div>
  )
}

export default Home


