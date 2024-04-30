/* eslint-disable @typescript-eslint/no-unused-vars */

import { FaEllipsisVertical } from "react-icons/fa6";


export interface Props {
    title: string;
    subTitle: string;
    img:string;
}


export const Card: React.FC<Props> = ({title, subTitle,img}) => {
  return (
    <div className="m-auto p-1 border border-gray-400 rounded-md shadow-xl md:max-w-[500px] ">
      <div className="flex items-center space-x-3">
        <div>
          {/* <img src="../public/chrome.png" alt="card" className="w-12 h-16 object-cover" /> */}
          <img src={img} alt="card" className="w-12 h-16 object-cover" />
        </div>
        <div className="">
          <div className="text-xs mb-1 text-blue-400 font-sans underline">{title}</div>
          <div className="text-xs line-clamp-1">{subTitle}</div>
        </div>
        <div className="items-start">
        <FaEllipsisVertical  className="h-3"/>
      </div>
      </div>
    </div>  
  );
};
