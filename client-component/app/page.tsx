'use client'

import Product_show from '@/Product/Product_show';
import Link from 'next/link';


interface User {
  id: number;
  name: string;
 
}
async function Get_Data():Promise<User[]>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json()
}

const HomePage =  async() => {
  const data=await Get_Data()

  return (
    <div>
      <h1>Hello </h1>
      <h1>2 girl friends</h1>
    </div>
  );
};

export default HomePage;
