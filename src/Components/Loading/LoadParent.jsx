import React from 'react'
import LoadChild from './LoadChild'

function LoadParent() {
  return (
    <div className='h-1 fixed w-full bg-transparent z-50 '>
      <LoadChild/>
    </div>
  )
}

export default LoadParent
