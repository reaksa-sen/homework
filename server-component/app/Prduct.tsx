import React from 'react'

interface Product_name{
  id:number;
  name:string;
  
}


const Prduct = ({name,id}:Product_name) => {

  return (
    <div className='w-[300px] h-[100px] bg-red-400 '>
      <h1>{name}</h1>
    </div>
  )
}

export default Prduct
