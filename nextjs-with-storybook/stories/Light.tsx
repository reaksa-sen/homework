import React from 'react'

interface Color{
    variant?:'green' | 'yellow'|'red'
}

const Light = ({variant='green'}:Color) => {
  return (
    <div
    
     className={`w-[100px] h-[100px] rounded-[50%]  bg-${variant}-500 `}>

    </div>
  )
}

export default Light
