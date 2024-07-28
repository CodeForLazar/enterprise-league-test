import { useState, useEffect } from 'react';
import axios, { type AxiosError } from 'axios';

type UseFetchHook = {
   url: string;
};

const useFetchHook = <T>({ url }: UseFetchHook) => {
   const [data, setData] = useState<T | []>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const controller = new AbortController();

      const fetchData = async () => {
         setLoading(true);
         try {
            const response = await axios.get(`${import.meta.env.VITE_DOMAIN}${url}`, {
               signal: controller.signal
            });
            setData(response.data as T);
         } catch (err) {
            const errorMessage = (err as AxiosError).message;
            setError(errorMessage);
         } finally {
            setLoading(false);
         }
      };

      fetchData();

      return () => {
         controller.abort();
      };
   }, [url]);

   return { data, loading, error };
};

export default useFetchHook;
