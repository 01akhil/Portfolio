import React from 'react'
import Navbar from '../navbar/Navbar'
import CenterText from '../navbar/center/CenterText'
import Black from './Black'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
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

      <div ref={pageRef} className='opacity-1 h-[100vh] w-full bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] bg-center bg-cover '>
      <Navbar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
      <CenterText/>
    </div>
    </div>
  )
}

export default Home


