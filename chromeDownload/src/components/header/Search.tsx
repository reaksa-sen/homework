import { Input } from "antd";
// import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

interface IPropsType {
  handleSearch: (searchTerm: string) => void;
}

export const Search: React.FC<IPropsType> = ({ handleSearch }) => {
  return (
    <Input
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
      prefix={<IoSearch />}
      placeholder="Search downloads"
      allowClear
      className=" rounded-full bg-slate-200 hover:border-blue-600 hover:bg-white"
    />
  );
};

export default Search;
