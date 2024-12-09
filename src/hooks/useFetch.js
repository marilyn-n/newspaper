import { useState, useEffect } from "react";

const useFetch = (url, id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    const storage = window.localStorage.getItem(id);
      
    if (!storage) {
      try {
        const request = await fetch(url);
        const data = await request.json();
        
        if (data.status === "OK") {
          setData(data.results);
          window.localStorage.setItem(
            id,
            JSON.stringify(data.results)
          );
        }
      } catch (error) {
        console.log(`${error} - something went wrong while fetchig the API`);
        setError(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [url, id]);

  return { data, error };
};

export default useFetch;
