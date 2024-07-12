import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import Nodes from 'three/examples/jsm/nodes/Nodes.js';
function SubHeading() {
  return (
 <div className='flex justify-between  font-[a4]  relative  leading-none text-xs -mt-6 uppercase text-left '>
     <div className='flex gap-4 '>
     <div className=''>
     <svg className='w-7 border rounded-full' fill='white' viewBox="0 0 42 42"><path d="M27.5,21L17,27.063V14.937L27.5,21z"></path></svg>
     </div>
      <h6 className='uppercase' >
        Play <br /> the film</h6>
    </div>

<div className='flex gap-10'>
  <h3>Creator <br />curator</h3>
  <h3>New York <br />Los Angeles</h3>
</div>
 </div>

  )
}

export default SubHeading
