'use client'
import Detail from '@/Product/Detail';
import React, { useState, useEffect} from 'react'


const Page = ({params}:{params:any}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUserData(data[params.pro-1]);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log(userData);
    
  }, []);
  return (
    <div>
      <h1>Hello{params.pro}</h1>
      {userData && <Detail name={userData?.name} username={userData?.username} email={userData?.email} id={userData.id}  />}
    </div>
  );
};

export default Page;
