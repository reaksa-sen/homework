import React from 'react'

interface TypeofDetail{
    id:number;
    name:string;
    username:string;
    email:string;

}
const Detail = ({name,username,email,id}:TypeofDetail) => {
  return (
    <div className='flex w-full gap-10  h-[100vh] justify-center items-center flex-col'>
      <h1 className='text-2xl'>id is {id}</h1>
      <h1 className='text-2xl'>name is {name}</h1>
      <h1 className='text-2xl'>username is {username}</h1>
      <h1 className='text-2xl'>email is {email}</h1>
    </div>
  )
}

export default Detail
