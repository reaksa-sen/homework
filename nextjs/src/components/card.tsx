"use client";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  id?: number;
  username: string;
  sex: string;
  image: string;
}

export interface CardLists {
  data: CardProps[];
}

export const Card: React.FC<CardProps> = ({ id, username, sex, image }) => {
  return (
    <Link href={`/news/${id}`}>
      <div className=" bg-gray-200 border my-6 rounded-md border-gray-300 shadow-xl">
        <Image
          src={image}
          alt="Picture of the author"
          width={1}
          height={1}
          layout={"responsive"}
          objectFit="cover"
          className="object-cover rounded-t-md"
        />
        <div className="flex flex-col mt-2 mb-4 px-1">
          <span className="text-blue-500 text-lg">{username}</span>
          <span className="text-orange-500 font-semibold">sex: {sex}</span>
        </div>
      </div>
    </Link>
  );
};

export const CardLists: React.FC<CardLists> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-8 md:grid-cols-5">
      {data.map((x) => {
        return (
          <div key={x.id}>
            <Card username={x.username} sex={x.sex} image={x.image} id={x.id}/>
          </div>
        );
      })}
    </div>
  );
};
