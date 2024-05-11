import React from "react";

interface Props{
    user:string;
    signout: () =>void
}

const User:React.FC<Props> = ({ user, signout }) => {
  return (
    <div className="flex space-x-3"> 
      {user ? (
        <>
          <h3>user: {user}</h3>
          <button onClick={signout}>Sign out</button>
        </>
      ) : (
        <span>Sign In</span>
      )}
    </div>
  );
};

export default User;
