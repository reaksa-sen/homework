import { FaEllipsisVertical } from "react-icons/fa6";
import { FaSistrix } from "react-icons/fa";
import React, { useState } from "react";
import { Card, Props } from "./card";
import { Header } from "./header";

interface SearchComponentProps {
  data: Props[];
}

export const Navigation: React.FC<SearchComponentProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(
    (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="containers">
      <div className="flex items-center justify-between p-3">
        <div className="flex space-x-2 items-center">
          <img
            src="../public/chrome.png"
            alt="log"
            className="md:h-9 md:w-9 h-5 w-5"
          />
          <span className="text-gray-800 text-sm font-semibold">Download</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaSistrix className="h-4 w-4 text-gray-600" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search downloads"
            className="border border-gray-700 rounded-sm px-1 placeholder:text-xs"
          />
        </div>
        <div>
          <FaEllipsisVertical />
        </div>
      </div>
      <Header />
      <div>
        {filteredData.map((x, index) => (
          <div className="mb-2" key={index}>
            <Card title={x.title} subTitle={x.subTitle} img={x.img} />
          </div>
        ))}
      </div>
    </div>
  );
};
