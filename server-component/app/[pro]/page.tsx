import React from 'react';
import { asyWork21 } from '../GetAPI';
import Detail from '../Detail';

interface TypeofDATA {
  id: number;
  name: string;
}

interface PageProps {
  params:any
  name:string
  address:any
}

const Page: React.FC<PageProps> = async({ params}:PageProps) => {
  const data = await asyWork21(params.pro);
  return (
    <div>
      <div>
        <Detail name={data?.name} username={data?.username} email={data.email} address={data.address} />
      </div>        


      <h1>Hello Dynamic</h1>
    </div>
  );
};

export default Page;