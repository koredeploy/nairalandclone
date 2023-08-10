// import { Children } from "react"
import { useContext, } from "react";
import greendot from "../assets/icons/Rectangle 2.png";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import redbar from "../assets/images/pseudo.png";
import Loading from "../components/utils/loading";
import CreatedAt from "../components/CreatedAt";


const Section1 = () => {

    const { token } = useContext(AuthContext);

    const { data, loading, error } = useFetch(
      "https://nairalandapi5.onrender.com/api/posts/",
      token
    );
    // const [img, setImg] = useState()
  
    // const data2=   Object.entries(data.results)
    // console.log(data[0]);
    data && console.log(data);
  return (
    <div className="b-container px-5 sm:px-5 md:px-24 pt-3">
    <div className="flex items-center gap-1 my-9">
      <span>
        <img className="object-cover" src={greendot} alt="" />
      </span>
      <h1 className="text-left text-3xl font-light">Headline</h1>
    </div>
  {/* section1 */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-7 mb-10 ">
      {data &&
        data.slice(0, 6).map((datum) => (
          <div key={datum.id} className="  relative sm:mb-3 " >
            
            <img src={`https://res.cloudinary.com/drui6fs9f/${datum.image}` } className="w-full object-cover" alt="" />
            {/* <img src={image1} alt="" className="w-full object-cover" /> */}
            <div className="bg-white px-5 pt-2 pb-5 rounded-br-md rounded-bl-md relative h-auto md:h-56">
            <div className="flex items-center gap-1 absolute -top-9  left-5">
              <span>
                {" "}
                <img src={redbar} alt="" />
              </span>
              <h2 className="text-white">{datum.tags}</h2>
            </div>
              <h2 className="text-left text-sm md:text-xl font-bold w-full xl:w-5/6  my-3">
                {datum.story}
              </h2>
              <div
                style={{ height: 1, "backgroundColor": "#00000033" }}
                className="w-11/12 mx-0 mt-4 mb-5"
              ></div>
              <p className="text-left"> By {datum.author.username}</p>
              <div className="flex item-center align-middle justify-between">
                <CreatedAt
                  classname={"text-left py-3"}
                  timeStamp={datum.created_at}
                />

                <p className="text-left self-center">{datum.created_at}</p>
              </div>
            </div>
          </div>
        ))}
        {<Loading loading={loading}/>}
        {error && <p>{error}</p>}
        
    </div>
    

  </div>
  )
}

export default Section1