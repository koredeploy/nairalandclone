import {useState,useEffect} from "react"
import axios from "axios"

const useFetch =(BASE_URL)=>{
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const fetchData = async(url)=>{
            try{
                setIsLoading(true);
                const response = await axios.get(url,{
                    cancelToken: source.token
                });
                if(isMounted){
                    setData(response.data)
                    setFetchError(null);
                }
            }catch(err){
                if(isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            }finally{
                isMounted && setIsLoading(false)
            }
        }
        fetchData(BASE_URL);

        return () =>{
            isMounted = false;
            source.cancel("operation cancel by the user")
        }
    },[BASE_URL])

    return {
        data,isLoading,fetchError
    }
}

export default useFetch;