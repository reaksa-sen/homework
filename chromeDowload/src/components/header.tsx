import { FaPrescriptionBottle } from "react-icons/fa"


export const Header: React.FC = () =>{
    return(
        <div className="flex justify-center items-center space-x-2 my-5 ">
            <FaPrescriptionBottle />
            <div className="text-xs">
                Your <span className="text-blue-400 underline">profile is managed </span>  
                by sabaicode.com
            </div>
        </div>
    )
}