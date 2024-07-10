import React from 'react'

interface TypeM{
    label:string,
    onClick:()=>void
}
const MyT: React.FC<TypeM> = ({ label, onClick }) => (
    <button onClick={onClick}>
      {label}
    </button> 
  );
  
const MyPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default MyPage
