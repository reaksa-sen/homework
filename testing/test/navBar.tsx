import React, { useState } from 'react'
import NavLink from './navLink'
interface User {
  name: string;
}

const Navbar = () => {
  const [user ,setUser] = useState<User |null>({name: 'reaksa'})
  function signout(){
    setUser(null);
  }
  return (
    <div className='flex bg-gray-500 space-x-28 p-5'>
      <h1>Logo</h1>
      <NavLink user={user?.name || ''} signout={signout} />
    </div>
  )
}

export default Navbar;