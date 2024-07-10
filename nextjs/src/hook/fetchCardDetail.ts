// import { useState, useCallback } from 'react';

// function useFetchDetail() {
//   const [data, setData] = useState(null);

//   const fetchData = useCallback(async (url:string) => {
//     try {
//       const response = await fetch(url);
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error("Failed to fetch data:", error);
//     }
//   }, []);

//   return { data, fetchData };
// }

// export default useFetchDetail;


//2
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
      console.log("hello",data)
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
