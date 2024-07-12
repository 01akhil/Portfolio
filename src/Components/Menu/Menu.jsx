import React, { useRef, useEffect } from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import gsap from 'gsap'

function Menu(props) {
  const menuRef = useRef(null)
  
  useEffect(() => {
    if (props.menuOpen) {
      gsap.to(menuRef.current, {
        top: "0",
        duration: 1,
        
         
      })
    } else {
      gsap.to(menuRef.current, {
        top:"-100%" , 
        duration: 1.55,
        
      })
    }
  }, [props.menuOpen])

  return (
    <div  ref={menuRef} className=' parent fixed top-[-100vh] h-screen w-full bg-gradient-to-b from-gray-900 to-black z-50 flex '>
      <MenuLeft />
      <MenuRight menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
    </div>
  )
}

export default Menu
