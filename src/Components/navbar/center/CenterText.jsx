import React from 'react'
import HeroText from './HeroText'
import SubHeading from './SubHeading'
function CenterText() {
  return (
    <div className='absolute  text-center top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>
      <HeroText/>
      <SubHeading/>
    </div>
  )
}

export default CenterText
