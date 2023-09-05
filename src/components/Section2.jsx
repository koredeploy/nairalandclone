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
import { Link } from 'react-router-dom';
import StoryDetail from '../pages/Detail/StoryDetail';

const Section2 = () => {
    const { token } = useContext(AuthContext);

  const { data, loading, error } = useFetch(
    "https://nairalandapi5.onrender.com/api/posts/",
    token
  );
 
  data && console.log(data[0]);


  return (
    <div className="bg-white">
    <div className="b-container px-5 sm:px-5 md:px-24 py-4">
    <div className="flex items-center gap-1 my-9">
      <span>
        <img className="object-cover" src={greendot} alt="" />
      </span>
      <h1 className="text-left text-3xl font-light">latest News</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-2 lg:gap-16 mb-10 items-center relative">
    {loading && <Loading  />}
    {data && data.slice(0, 6).map((datum)=>(
        <div key={datum.id} className="  relative sm:mb-3 flex justify-between mb-5 xl:mb-0" >
        {/* <img src={datum.image} alt="" /> */}
        
        <div className="w-full sm:h-40 lg:h-44 md:max-w-xs " style={{}}>
           <img src={`https://res.cloudinary.com/drui6fs9f/${datum.image}` } className=" sm:w-52  md:h-40  object-cover" alt="" /></div>
        
        <div className=" w-full px-5 ">

          <div className="grid grid-cols-1 gap-3 item-center align-middle justify-between ">
              <p className="text-left md:self-center text-sm py-1 md:py-2">{datum.tags}</p>
          </div>
          <Link to={`/storydetail/${datum.id}`}>
          <h2 className="text-left text-blue-800 text-sm lg:text-lg font-medium lg:font-bold w-full">
            {datum.title.slice(0, 35)}
          </h2></Link>
            <CreatedAt
              classname={"text-left text-xs py-1 md:py-2 w-full"}
              timeStamp={datum.created_at}
            />

          
        </div>
        

      </div>
    ))}
    {!loading &&  <span className="absolute left-2/4 hidden xl:visible -top-5 h-full">
      <img src={stepper} alt="" /></span>  }
     {error && <p className='text-left'>{error}</p>}
    </div>
    </div>
    </div>
  )
}

export default Section2