import { useContext, } from "react";
import greendot from "../assets/icons/Rectangle 2.png";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import Loading from "../components/utils/loading";
import CreatedAt from "../components/CreatedAt";
import stepper from '../assets/images/Group 43.png'
import { Link } from "react-router-dom";


const Section5 = () => {
    const { token } = useContext(AuthContext);

    const { data, loading, error } = useFetch(
      "https://nairalandapi5.onrender.com/api/posts/",
      token
    );
  return (
    <div style={{backgroundColor: "#EBEBEB"}}>
    <div className="b-container px-5 sm:px-5 md:px-24 pt-3">
    <div className="flex items-center gap-1 my-9">
      <span>
        <img className="object-cover" src={greendot} alt="" />
      </span>
      <h1 className="text-left text-3xl font-light">latest News</h1>
    </div>
    <div className="grid grid-cols-1 sm:gap-4 md:gap-16 mb-10 items-center relative">
      {loading && <Loading/>}
    {data && data.slice(0, 2).map((datum)=>(
        <div key={datum.id} className="  relative sm:mb-3 flex justify-between gap-4 mb-5 xl:mb-0" >
    
        <div className="w-full md:max-w-xl " style={{}}>
           <img src={`https://res.cloudinary.com/drui6fs9f/${datum.image}`} alt="" className=" object-cover min-h-full  sm:h-56 md:h-72  sm:w-52 min-w-full rounded-md " />
           </div>
        
        <div className=" w-full px-3  sm:text-sm text-sm">

          <div className=" item-center align-middle w-full justify-between gap-3">
              <p className="text-left text-gray-600 font-semibold text-lg py-1 md:py-2">{datum.tags}</p>
           

          </div>
          <Link to={`StoryDetail/${datum.id}`}>
          <h2 className="text-left text-blue-800 text-base font-medium md:font-bold w-full my-2">
            {datum.title}
          </h2>
          </Link>
          <CreatedAt
              classname={"text-left sm:text-xs text-xs py-1 md:py-2 w-full"}
              timeStamp={datum.created_at}
            />
        
          
        </div>
        
      </div>
    ))}
    {!loading &&  <span className="absolute left-2/4 hidden xl:visible -top-5 h-full"><img src={stepper} alt="" /></span>  }
    {error && <p className='text-left'>{error}</p>}
    </div>
    </div>
    </div>
  )
}

export default Section5