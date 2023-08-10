import { useContext, } from "react";
import greendot from "../assets/icons/Rectangle 2.png";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import sec3img1 from '../assets/images/Emefiele-313x209 2.png'
import sec3img2 from '../assets/images/forex-255x148 1.png'
import redbar from "../assets/images/pseudo.png";
import Loading from "../components/utils/loading";



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
      <h1 className="text-left text-3xl font-light">World News</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
    {data &&
        data.slice(0, 1).map((datum) => (
          <div key={datum.id} className="  relative sm:mb-3  " >
            {/* <img src={datum.image} alt="" /> */}
            <img src={sec3img1} alt="" className="w-full object-cover" />
            <div className=" pt-2 pb-5 relative h-auto ">
            <div className="flex items-center gap-1 absolute -top-9  left-5">
              <span>
                <img src={redbar} alt="" />
              </span>
              <h2 className="text-white">{datum.tags}</h2>
            </div>
              <h2 className="text-left text-blue-800 text-sm md:text-xl font-bold w-4/5 xl:w-5/6  my-3">
                {datum.story}
              </h2>
              
            </div>
          </div>
        ))}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 mb-10 ">
      {data &&
        data.slice(2, 6).map((datum) => (
          <div key={datum.id} className="  relative sm:mb-3 " >
            {/* <img src={datum.image} alt="" /> */}
            <img src={sec3img2} alt="" className="w-full object-cover" />
            <div className=" pt-2 pb-5 relative h-auto ">
            <div className="flex items-center gap-1 absolute -top-9  left-5">
              <span>
                <img src={redbar} alt="" />
              </span>
              <h2 className="text-white">{datum.tags}</h2>
            </div>
              <h2 className="text-left text-blue-800 text-sm md:text-lg font-bold w-full  my-2">
                {datum.story}
              </h2>
              
            </div>
          </div>
        ))}
        {<Loading loading={loading}/>}
        {error && <p>{error}</p>}
        
    </div>
    </div>
    </div>
  
  )
}

export default Section3