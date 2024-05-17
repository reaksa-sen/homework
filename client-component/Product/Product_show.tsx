import Link from 'next/link';
import React from 'react'

interface Typeof{
    name:string,
    id:number
}

const Product_show = ({name,id}:Typeof) => {

    
  return (
    <div className='w-[60%] bg-red-300 h-[100px] m-3 flex justify-center items-center '>
        <Link href={`/detail/${id}`}>
             <h1>{name}</h1>
      </Link>
    </div>
  )
}

export default Product_show
