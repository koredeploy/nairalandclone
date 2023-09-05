import { useContext, useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, token) => {
  const [data, setData] = useState([]);
  const [singleNews, setSingleNews] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  

  useEffect(() => {
    const getData = async () => {
      if (token) {
        const { data } = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });
        setData(data.results);
        setSingleNews(data)
        setLoading(false);
      } else {
        const res = await axios.get(url);
        const receivedData = res.data;
        // console.log(receivedData);
        setData(receivedData);
        setSingleNews(res.data)
        setLoading(false)
        
        
      }
    };

    setTimeout(() => {
      getData().catch((error) => {
        console.log(error);
        setError("Oops Something went wrong");
        setLoading(false);
      });
    }, 1000);
  }, [url, token]);
  return { data, loading, error, singleNews };
};

export default useFetch;
