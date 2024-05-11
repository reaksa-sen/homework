import User from "./user";

interface Props{
    user:string;
    signout: () => void
}

const NavLink:React.FC<Props> =  ({user, signout}) =>{
    
return(
    <div className="flex space-x-10">
       <div>Home</div>
      <div>About</div>
      <div>Contact</div>
      <User user={user} signout={signout} />
    </div>
)
}

export default NavLink;