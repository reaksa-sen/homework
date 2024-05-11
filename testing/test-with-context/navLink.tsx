import User from "./user";


const NavLink:React.FC=  () =>{
    
return(
    <div className="flex space-x-10">
       <div>Home</div>
      <div>About</div>
      <div>Contact</div>
      <User  />
    </div>
)
}

export default NavLink;