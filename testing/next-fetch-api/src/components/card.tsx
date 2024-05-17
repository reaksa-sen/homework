'use client';


import Link from "next/link";

export interface CardProps {
  id?: number;
  title: string;
  body: string;
}

export interface CardLists {
  data: CardProps[];
}

export const Card: React.FC<CardProps> = ({ id, title, body }) => {
  return (
    <Link href={`/news/${id}`}>
      <div className=" flex  flex-col bg-gray-200 border py-5 my-6 border-gray-400">
        <span className="text-blue-500">{title}</span>
        <span className="text-orange-500 font-semibold">{body}</span>
      </div>
    </Link>
  );
};

export const CardLists: React.FC<CardLists> = ({ data }) => {
  return (
    <div>
      {data.map((x) => {
        return (
          <div key={x.id} className="flex">
            <Card title={x.title} body={x.body} id={x.id} />
          </div>
        );
      })}
    </div>
  );
};
