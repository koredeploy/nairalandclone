import { useContext, } from "react";
import greendot from "../assets/icons/Rectangle 2.png";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import sec3img1 from '../assets/images/Emefiele-313x209 2.png'
import sec3img2 from '../assets/images/forex-255x148 1.png'
import redbar from "../assets/images/pseudo.png";
import Loading from "../components/utils/loading";
import { Link } from "react-router-dom";



const Section3 = () => {

    const { token } = useContext(AuthContext);

    const { data, loading, error } = useFetch(
      "https://nairalandapi5.onrender.com/api/posts/",
      token
    );
  return (
    <div className="b-container px-5 sm:px-5 md:px-24 pt-3">
    <div className="flex items-center gap-1 my-9">
      <span>
        <img className="object-cover" src={greendot} alt="" />
      </span>
      <h1 className="text-left text-3xl font-light">Recent News</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
    {data &&
        data.slice(8, 9).map((datum) => (
          <div key={datum.id} className="  relative sm:mb-3  " >
            {/* <img src={datum.image} alt="" /> */}
            <img src={`https://res.cloudinary.com/drui6fs9f/${datum.image}`} alt="" className="w-full object-cover md:max-w-xl md:h-80 rounded-md " />
            <div className=" pt-2 pb-5 relative h-auto ">
            <div className="flex items-center gap-1 absolute -top-9  left-5">
              <span>
                <img src={redbar} alt="" />
              </span>
              <h2 className="text-white">{datum.tags}</h2>
            </div>
              <Link to={`StoryDetail/${datum.id}`}>
              <h2 className="text-left text-blue-800 text-sm md:text-xl font-bold w-4/5 xl:w-5/6  my-3">
                {datum.title}
              </h2>
              <p className="text-left ">{datum.story.slice(0, 160)}</p>
              </Link>

              
            </div>
          </div>
        ))}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 mb-10 ">
      {data &&
        data.slice(1, 5).map((datum) => (
          <div key={datum.id} className="  relative sm:mb-3 " >
            {/* <img src={datum.image} alt="" /> */}
            <img src={`https://res.cloudinary.com/drui6fs9f/${datum.image}`} alt="" className="w-full h-48 rounded-md object-cover" />
           <Link to={`storydetail/${datum.id}`}>
          
            <div className=" pt-2 pb-5 relative h-auto ">
            <div className="flex items-center gap-1 absolute -top-9  left-5">
              <span>
                <img src={redbar} alt="" />
              </span>
              <h2 className="text-white">{datum.tags}</h2>
            </div>
              <h2 className="text-left text-blue-800 text-sm md:text-lg font-bold w-full  my-2">
                {datum.title}
              </h2>
              
            </div>
            </Link>
          </div>
        ))}
        {error && <p className='text-left'>{error}</p>}
        
    </div>
    </div>
    </div>
  
  )
}

export default Section3