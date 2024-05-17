// // hooks/useFetch.ts
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CardProps } from '@/components/card';

// const useFetchDetail = (url:string) => {
//   const [data, setData] = useState<CardProps | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<CardProps>(url);
//         setData(response.data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetchDetail;


import { CardProps } from "@/components/card";
import { useState, useCallback } from "react";


const useFetchDetail = () => {
  const [data, setData] = useState<CardProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result: CardProps = await response.json();
      console.log('API Response:', result); // Log the API response
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};

export default useFetchDetail;
