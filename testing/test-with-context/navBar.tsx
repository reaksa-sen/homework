import { createContext, useState } from 'react'
import NavLink from './navLink'

interface User {
  name: string;
}

export interface NavBarContextType {
  user: User | null;
  signout: () => void;
}

export const NavBarContext = createContext<NavBarContextType>({
  user: null,
  signout: () => {} 
});


const Navbar1 = () => {
  const [user ,setUser] = useState<User | null>({name: 'reaksa'})
  function signout(){
    setUser(null);
  }
  return (
    <NavBarContext.Provider value={{user,signout}}>
    <div className='flex bg-gray-500 space-x-28 p-5'>
      <h1>Logo</h1>
      <NavLink  />
    </div>
    </NavBarContext.Provider>
  )
}

export default Navbar1;