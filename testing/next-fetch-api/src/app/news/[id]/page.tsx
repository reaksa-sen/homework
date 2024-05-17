// "use client";
// import { CardLists, CardProps } from "@/components/card";
// import useFetch from "@/hook/fetchCard";
// import useFetchDetail from "@/hook/fetchCardDetail";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const CardDetail: React.FC<CardProps> = ({ params }: any) => {
//   // const [userData, setUserData] = useState(null);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   //       const data = await res.json();
//   //       setUserData(data[params.id - 1]);
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   const { data, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   return (
//     <div>
//       <>
//         {/* <h1>hello: {params.id}</h1> */}
//         <h1 className="mb-4 text-red-500"> Tittle:{data?.title}</h1>
//         <p> Body: {data?.body}</p>
//       </>
//     </div>
//   );
// };

// export default CardDetail;



"use client";
import { useEffect } from "react";
import useFetchDetail from "@/hook/fetchCardDetail";
import { useSearchParams } from "next/navigation";

function CardDetail({ params }: { params: { id: number } })  {
  const searchParams = useSearchParams(); // Destructuring searchParams
  const id = searchParams.get('id');

  const { data, loading, error, fetchData } = useFetchDetail();

  useEffect(() => {
    console.log('ID:', id); // Log the ID
    if (id) {
      fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
  }, [id, fetchData]);

  useEffect(() => {
    console.log('Fetched Data:', data); // Log the fetched data
  }, [data]);

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default CardDetail;
