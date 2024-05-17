"use client";

import { CardLists } from "@/components/card";
import useFetch from "@/hook/fetchCard";

const Page: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p className="text-center w-full m-auto text-xl text-blue-500">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl text-center">Data from API</h1>
      {data && <CardLists data={data}/>}
    </div>
  );
};

export default Page;
