import React from 'react'
// import { Children } from "react"
import { useContext, } from "react";
import greendot from "../assets/icons/Rectangle 2.png";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import Loading from "../components/utils/loading";
import CreatedAt from "../components/CreatedAt";
import stepper from '../assets/images/Group 43.png'
import sect2img from '../assets/images/sowore-400x240 1 (1).png'

const Section2 = () => {
    const { token } = useContext(AuthContext);

  const { data, loading, error } = useFetch(
    "https://nairalandapi5.onrender.com/api/posts/",
    token
  );
 
  data && console.log(data[0]);


  return (
    <div className="bg-white">
    <div className="b-container px-5 sm:px-5 md:px-24 pt-3">
    <div className="flex items-center gap-1 my-9">
      <span>
        <img className="object-cover" src={greendot} alt="" />
      </span>
      <h1 className="text-left text-3xl font-light">latest News</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-16 mb-10 items-center relative">
    {data && data.slice(4, 10).map((datum)=>(
        <div key={datum.id} className="  relative sm:mb-3 flex justify-between mb-5 xl:mb-0" >
        {/* <img src={datum.image} alt="" /> */}
        
        <div className="w-full" style={{}}> <img src={`https://res.cloudinary.com/drui6fs9f/${datum.image}` } className="w-full object-cover" alt="" /></div>
        <div className=" w-full px-5 ">

          <div className="flex item-center align-middle justify-between">
              <p className="text-left self-center text-sm py-1 md:py-2">{datum.tags}</p>
            <CreatedAt
              classname={"text-left text-sm py-1 md:py-2"}
              timeStamp={datum.created_at}
            />

          </div>
          <h2 className="text-left text-blue-800 text-sm md:text-lg font-medium md:font-bold w-full">
            {datum.story}
          </h2>
          
        </div>
      </div>
    ))}
    {!loading &&  <span className="absolute left-2/4 hidden xl:visible -top-5 h-full"><img src={stepper} alt="" /></span>  }
         
      {<Loading loading={loading}/>}
     {error && <p>{error}</p>}
    </div>
    </div>
    </div>
  )
}

export default Section2