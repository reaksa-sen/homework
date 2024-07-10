import React from 'react'

interface TypeofDetail{
    name:string,
    username:string,
    email:string,
    address:Address
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}


const Detail = ({name,username,email,address}:TypeofDetail) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>email is  :{email}</h1>
        <h1>user_name  is :{username}</h1>
        <h1>Adress is :  {address.street}</h1>
    </div>
  )
}

export default Detail
