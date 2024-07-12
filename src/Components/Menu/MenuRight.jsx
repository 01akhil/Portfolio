import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
function MenuRight(props) {

  const menuBarCloses=()=>{
    props.setMenuOpen(false);
  }

  const textRef=useRef(null);

  const[textTrueAbouts,settextTrueAbouts]= useState(false);
  const[textTrueStory,settextTrueStory]= useState(false);
  const[textTrueProjects,settextTrueProjects]= useState(false);
  const[textTrueReleases,settextTrueReleases]= useState(false);

  const handleMouseEnterAbouts=()=>{
    settextTrueAbouts(true);
  }

const handleMouseLeaveAbouts=()=>{
  settextTrueAbouts(false);
}

const handleMouseEnterStory=()=>{
  settextTrueStory(true);
}

const handleMouseLeaveStory=()=>{
settextTrueStory(false);
}

const handleMouseEnterProjects=()=>{
  settextTrueProjects(true);
}

  function handleMouseLeaveProjects() {
    settextTrueProjects(false);
  }

  const handleMouseEnterReleases=()=>{
    settextTrueReleases(true);
  }
  
    function handleMouseLeaveReleases() {
      settextTrueReleases(false);
    }


  return (
    <div className='w-1/3 h-full'>
      <Link to="/">
      <div onClick={menuBarCloses}>
            <button  className='uppercase ml-[25vw] mt-8 font-[a4] text-zinc-200 text-xs' >close</button>
        </div>
      </Link>
        
      <span>
        <img className='w-10' src="src\assets\logo-removebg-preview.png" alt="" />
      </span>

      <div className='uppercase font-[u8] text-2xl mt-[17vh] mb-[18vh] flex flex-col '>
     
      <div
          onMouseEnter={handleMouseEnterAbouts}
          onMouseLeave={handleMouseLeaveAbouts}
          className='relative h-[5vh] overflow-hidden flex flex-col  w-[8vw]'
        >
          <h1
            className={`transition-transform duration-700 ${textTrueAbouts ? "translate-y-[-50px] " : "translate-y-[0] absolute"}`}
          >
            Abouts
          </h1>
          <h1
            className={`transition-transform duration-700 ${textTrueAbouts ? "translate-y-[0] absolute" : "translate-y-[50px] "}`}
          >
            Abouts
          </h1>
        </div>


        <div
          onMouseEnter={handleMouseEnterStory} 
          onMouseLeave={handleMouseLeaveStory}
          className='relative h-[5vh] overflow-hidden flex flex-col w-[7vw]'
        >
          <h1
            className={`transition-transform duration-700 ${textTrueStory ? "translate-y-[-50px] " : "translate-y-[0] absolute"}`}
          >
            Story
          </h1>
          <h1
            className={`transition-transform duration-700 ${textTrueStory ? "translate-y-[0] absolute" : "translate-y-[50px] "}`}
          >
            Story
          </h1>
        </div>

        
        <div
          onMouseEnter={handleMouseEnterProjects} 
          onMouseLeave={handleMouseLeaveProjects}
          className='relative h-[5vh] overflow-hidden flex flex-col w-[10vw]'
        >
          <h1
            className={`transition-transform duration-700 ${textTrueProjects ? "translate-y-[-50px] " : "translate-y-[0] absolute"}`}
          >
            Projects
          </h1>
          <h1
            className={`transition-transform duration-700 ${textTrueProjects ? "translate-y-[0] absolute" : "translate-y-[50px] "}`}
          >
            Projects
          </h1>
        </div>


        <div
          onMouseEnter={handleMouseEnterReleases} 
          onMouseLeave={handleMouseLeaveReleases}
          className='relative h-[5vh] overflow-hidden flex flex-col w-[10vw]'
        >
          <h1
            className={`transition-transform duration-700 ${textTrueReleases ? "translate-y-[-50px] " : "translate-y-[0] absolute"}`}
          >
            Releases
          </h1>
          <h1
            className={`transition-transform duration-700 ${textTrueReleases ? "translate-y-[0] absolute" : "translate-y-[50px] "}`}
          >
            Releases
          </h1>
        </div>



      </div>

      <div className='grid-cols-2 grid gap-3 uppercase font-[u4] text-sm tracking-tighter'>
        <h1>Follow</h1>
        <h1>instagram </h1>
        <h1>Listen</h1>
        <h1>INDIA</h1>

        <h1>get in touch</h1>
        <h1>Email</h1>
        <h1>Leetcode</h1>
        <h1>Github</h1>

      </div>
     
    </div>
  )
}

export default MenuRight