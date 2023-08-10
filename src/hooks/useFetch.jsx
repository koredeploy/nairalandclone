import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const useFetch = (url, token) => {
  const [data, setData] = useState([]);
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
        }
        );
        // setData(res.data)
       setData(data.results)
        setLoading(false)
        
        // setapiData(res)
        // setapiData(receiveData);
        // setLoading(false);
        // console.log(receiveData);
        
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
  return { data, loading, error };
};

export default useFetch;


