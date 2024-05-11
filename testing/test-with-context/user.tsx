/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useContext } from "react";
import { NavBarContext, NavBarContextType } from "./navBar";


const User: React.FC= () => {
  const {user, signout} = useContext<NavBarContextType>(NavBarContext);
  return (
    <div className="flex space-x-3"> 
      {user ? (
        <>
          <h3>user: {user?.name}</h3>
          <button onClick={signout}>Sign out</button>
        </>
      ) : (
        <span>Sign In</span>
      )}
    </div>
  );
};

export default User;
