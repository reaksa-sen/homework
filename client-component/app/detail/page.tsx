'use client'

import Product_show from '@/Product/Product_show';
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

async function Get_Data(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const Page = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData(){
      const result=await Get_Data();
      setData(result)
    }
    fetchData();
  }, []); 

  return (
    <div>
      {data.map((p) => (
        <div className='flex justify-center items-center flex-col gap-9 bg-blue-400' key={p.id}>
          <Product_show name={p.name} id={p.id} />
        </div>
      ))}
    </div>
  );
}

export default Page;
