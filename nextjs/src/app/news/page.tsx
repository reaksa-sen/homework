"use client";

import { CardLists } from "@/components/card";
import useFetch from "@/hook/fetchCard";

import { useState } from "react";

const Page: React.FC = () => {
  const [page, setPage] = useState<number>(5);
  const { data } = useFetch(
    `https://6646c7e251e227f23aafce66.mockapi.io/user/?page=2&limit=${page}`
  );

  // const fetchData = ({pageParam=1}) =>{
  //   return axios.get(`https://6646c7e251e227f23aafce66.mockapi.io/user?_limit=2&_page=${pageParam}`)
  // }

  // const {
  //   isLoading,
  //   error,
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage
  // } = useInfiniteQuery({
  //   ['user'],
  //   fetchData,
  //     getNextPageParam: (_lastPage: any, pages:any) => {
  //       if (pages.length < 4) {
  //         return pages.length + 1;
  //       }else
  //       return undefined;
  //     }
  // }
  // )

  // useEffect(() => {
  //   async function fetchData() {
  //     const newData = await Show_more(limit);
  //     setData(newData);
  //   }
  //   fetchData();
  // }, [limit]);

  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-2xl text-center font-bold">Data Users</h1>
      {data && <CardLists data={data} />}
      {/* {data?.pages.map((page, i) => (
              <CardLists key={`member-${i}`} data={page.data} />
            ))} */}
      <button
        // disabled={!hasNextPage}
        // onClick={() => fetchNextPage}
        onClick={() => setPage((prevPage) => prevPage + 5)}
        className="bg-blue-400 hover:bg-blue-600 px-4 py-3 rounded-md m-auto"
      >
        See More
      </button>

      {/* <div>{isFetching && !isFetchingNextPage ? 'Fetching....': null }</div> */}
    </div>
  );
};

export default Page;
