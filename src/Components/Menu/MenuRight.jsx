import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlinkingCursor from '../BlinkingCursor';
import HoverLine from './Hoverline';
function MenuRight(props) {

  

  const menuBarCloses = () => {
    props.setMenuOpen(false);
  };

  const [textTrueAbouts, setTextTrueAbouts] = useState(false);
  const [textTrueStory, setTextTrueStory] = useState(false);
  const [textTrueProjects, setTextTrueProjects] = useState(false);
  const [textTrueReleases, setTextTrueReleases] = useState(false);

  const handleMouseEnterAbouts = () => setTextTrueAbouts(true);
  const handleMouseLeaveAbouts = () => setTextTrueAbouts(false);

  const handleMouseEnterStory = () => setTextTrueStory(true);
  const handleMouseLeaveStory = () => setTextTrueStory(false);

  const handleMouseEnterProjects = () => setTextTrueProjects(true);
  const handleMouseLeaveProjects = () => setTextTrueProjects(false);

  const handleMouseEnterReleases = () => setTextTrueReleases(true);
  const handleMouseLeaveReleases = () => setTextTrueReleases(false);

  const handleClickProjects = () => {
    props.setShowAllProjects(true); // Update state to show AllProjects
  };

  return (
    <div className='w-1/3 h-full'>
      <Link to="/">
        <div onClick={menuBarCloses}>
          <button className='uppercase ml-[25vw] mt-8 font-[a4] text-zinc-200 text-xs'>close</button>
        </div>
      </Link>

      <span>
        <img className='w-10' src="src/assets/logo-removebg-preview.png" alt="" />
      </span>

      <div className='uppercase font-[u8] text-2xl mt-[17vh] mb-[18vh] flex flex-col gap-[10vh]'>
        <div
          onMouseEnter={handleMouseEnterAbouts}
          onMouseLeave={handleMouseLeaveAbouts}
          className='relative h-[5vh] overflow-hidden flex flex-col w-[8vw]'
        >
          <h1 className={`transition-transform duration-700 ${textTrueAbouts ? "translate-y-[-50px]" : "translate-y-[0] absolute"}`}>
            About
          </h1>
          <h1 className={`transition-transform duration-700 ${textTrueAbouts ? "translate-y-[0] absolute" : "translate-y-[50px]"}`}>
            Abouts
          </h1>
        </div>

        {/* <div
          onMouseEnter={handleMouseEnterStory}
          onMouseLeave={handleMouseLeaveStory}
          className='relative h-[5vh] overflow-hidden flex flex-col w-[7vw]'
        >
          <h1 className={`transition-transform duration-700 ${textTrueStory ? "translate-y-[-50px]" : "translate-y-[0] absolute"}`}>
            Story
          </h1>
          <h1 className={`transition-transform duration-700 ${textTrueStory ? "translate-y-[0] absolute" : "translate-y-[50px]"}`}>
            Story
          </h1>
        </div> */}

        <Link to="/menu/projects">
          <div
            onClick={handleClickProjects}
            onMouseEnter={handleMouseEnterProjects}
            onMouseLeave={handleMouseLeaveProjects}
            className='relative h-[5vh] overflow-hidden flex flex-col w-[10vw]'
          >
            <h1 className={`transition-transform duration-700 ${textTrueProjects ? "translate-y-[-50px]" : "translate-y-[0] absolute"}`}>
              Projects
            </h1>
            <h1 className={`transition-transform duration-700 ${textTrueProjects ? "translate-y-[0] absolute" : "translate-y-[50px]"}`}>
              Projects
            </h1>
          </div>
        </Link>

        {/* <div
          onMouseEnter={handleMouseEnterReleases}
          onMouseLeave={handleMouseLeaveReleases}
          className='relative h-[5vh] overflow-hidden flex flex-col w-[10vw]'
        >
          <h1 className={`transition-transform duration-700 ${textTrueReleases ? "translate-y-[-50px]" : "translate-y-[0] absolute"}`}>
            Releases
          </h1>
          <h1 className={`transition-transform duration-700 ${textTrueReleases ? "translate-y-[0] absolute" : "translate-y-[50px]"}`}>
            Releases
          </h1>
        </div> */}
        
      </div>

      <div className='grid-cols-2 grid gap-3 uppercase font-[u4] text-sm -tracking-wide'>
        <h1>Coding Profiles</h1>
        <h1>
          <a target='_blank' href="https://leetcode.com/u/Akhilesh_Bhadula/"><h1>Leetcode</h1></a>
          <a target='_blank' href="https://github.com/01akhil">GitHub</a>
          </h1>
        
        <span className='-ml-2'> <BlinkingCursor/>
          <span>Get in touch</span>
        </span>

        {/* <h1 className='text-black bg-white w-[4vw] flex items-center justify-center'>Email</h1> */}
        
        <span>
        <HoverLine/>
        </span>

        <h1>Socials</h1>
        
        <a target='none' href="https://www.instagram.com/akhileshbhadula/?utm_source=qr">Instagram</a>
        <h1>Contact NO.</h1>
        <h1>9315 XXXX 30 </h1>
      </div>
    </div>
  );
}

export default MenuRight;
