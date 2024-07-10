import React from 'react'
import Prduct from './Prduct';
import Link from 'next/link';
import { AsynWork } from './GetAPI';

const page = async () => {
  const data = await AsynWork();
  return (
    <div className='flex bg-blue-400 justify-center items-center gap-5 flex-col' >
      {data.map((item) => (
        <div >
          <Link href={`${item.id}`}><Prduct name={item?.name} id={item.id}/></Link>
        </div>
      ))}

    </div>
  )
}

export default page
