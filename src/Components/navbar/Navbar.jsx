import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
function Navbar(props) {
  return (
    <div className='flex w-full items-center justify-between px-3 py-2 z-20 fixed' >
        <Logo/>
        <Menu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
    </div>
  )
}

export default Navbar
