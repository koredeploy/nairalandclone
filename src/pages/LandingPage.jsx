import Slider from "../components/Slider";
import Rootlayout from "../layout/Rootlayout";
import "../styles/LandingPage.css";

import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import HomepageSwiper from "../components/homepageSwiper";
import Section4a from "../components/Section4a";
import Section5 from "../components/Section5";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const { data, loading, error } = useFetch(
    "https://nairalandapi5.onrender.com/api/posts/",
    token
  );

useEffect(()=>{
  if(!token){
    navigate('/login')
  }  
}, [])

  // const data2=   Object.entries(data.results)
console.log(token);

  return (
    <Rootlayout>
        <Slider />
          <Section1 />
          <Section2 />
          <Section3 />
          <HomepageSwiper />
          <Section4a data={data} error={error} loading={loading}/>
          <Section5/>
      
    </Rootlayout>
  );
};

export default LandingPage;
