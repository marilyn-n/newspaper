import { useState, useEffect } from "react";

const useFetch = (url, id, options) => {
  const [data, setData] = useState({});

  const getData = async () => {
    const storage = window.localStorage.getItem(id);
      
    if (!storage) {
      try {
        const request = await fetch(url, options);
        const data = await request.json();
        
        if (request.status === 200 || request.cod === 200) {
          setData(data);
          window.localStorage.setItem(
            id,
            JSON.stringify(data)
          );
        }
      } catch (error) {
        console.log(`${error} - something went wrong while fetchig the API`);
      }
    } else {
      setData(JSON.parse(storage))
      console.log('displaying data from localStorage');
      
    }
  };

  useEffect(() => {
    getData();
  }, [url, id]);

  return data;
};

export default useFetch;
