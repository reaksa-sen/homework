"use client";

import { useEffect } from "react";
import useFetchDetail from "@/hook/fetchCardDetail";
import { useParams } from "next/navigation";
import Image from "next/image";

function CardDetail() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  console.log("hello", id);
  
  const { data, fetchData } = useFetchDetail();
  
  useEffect(() => {
    if (id) {
      fetchData(`https://6646c7e251e227f23aafce66.mockapi.io/user/${id}`);
    }
  }, [id, fetchData]);
  

  if (!data) {
    return <div className="container text-center">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl"> Username: {data.username}</h1>
        <p className="text-xl my-5"> Sex: {data.sex}</p>
        <Image
          src={data.image}
          alt="Picture of the author"
          width={16}
          height={5}
          layout={"responsive"}
          objectFit="cover"
          className="object-cover rounded-t-md  "
        />
      </div>
    </div>
  );
}

export default CardDetail;
