
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CardProps } from '@/components/card';

const useFetch = (url:string) => {
  const [data, setData] = useState<CardProps[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CardProps[]>(url);
        setData(response.data);
      } catch (err) {
        setError('An error occurred');
      }
    };

    fetchData();
  },[url]);

  return { data, error };
};

export default useFetch;