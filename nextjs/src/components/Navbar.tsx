/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <div className="border border-b-gray-400">
      <div className="container bg-gray-200 p-4 flex items-center justify-between ">
        <img src="/logo.png" alt="log" className="w-16 h-auto" />
        <div className="font-semibold text-lg flex space-x-10">
          <Link href={"/home"}>Home</Link>
          <Link href={"/news"}>News</Link>
        </div>
      </div>
    </div>
  );
};
