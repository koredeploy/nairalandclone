import { useContext, useEffect } from "react";
import Rootlayout from "../layout/Rootlayout";
import useFetch from "../hooks/useFetch";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import redbar from "../assets/images/pseudo.png";
import CreatedAt from "../components/CreatedAt";
import Loading from "../components/utils/loading";


const SearchPage = () => {
  const { token, searchValue } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(()=>{
    navigate("/login")
  }, [])
  const { data, error, loading } = useFetch(
    "https://nairalandapi5.onrender.com/api/posts/",
    token
  );
  console.log(searchValue.toLowerCase());
  console.log(data);
  return (
    <Rootlayout>
      <h1 className='py-5 text-xl font-bold text-green-900'> Search Result</h1>
     <div className="px-5 sm:px-5 md:px-24 py-5">
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10 py-10">
        {!data && <div className="py-10">
            <h1>No result Found </h1>
        </div> }
        {loading && <Loading/>}
        {error && <h2>Something went wrong..</h2>}
        {data && data
          .filter((val) => {
            if (searchValue == "") {
              return (
                <div> <h1>Result not found </h1></div>
              )
            } else if (
              val.title.toLowerCase().includes(searchValue.toLowerCase()) || val.story.toLowerCase().includes(searchValue.toLowerCase()) || val.tags.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val;
            }
          })
          .map((datum) => {
            return (
              <div key={datum.id} className="  relative sm:mb-3 ">
                <div className=" md:h-52 md:max-w-sm min-w-full bg-white w-full rounded-tl-md rounded-tr-md">
                  <img
                    src={`https://res.cloudinary.com/drui6fs9f/${datum.image}`}
                    className=" h-52 w-full object-cover rounded-md"
                    alt=""
                  />
                </div>
                <Link to={`/storydetail/${datum.id}`}>
                  <div className="bg-white px-5 pt-2 pb-5 rounded-br-md rounded-bl-md relative h-auto md:h-56">
                    <div className="flex items-center gap-1 absolute -top-9  left-5">
                      <span>
                        <img src={redbar} alt="" />
                      </span>
                      <h2 className="text-white">{datum.tags}</h2>
                    </div>
                    <h2 className="text-left text-sm md:text-lg font-bold w-full xl:w-5/6  my-3">
                      {datum.title}
                    </h2>
                    <div
                      style={{ height: 1, backgroundColor: "#00000033" }}
                      className="w-11/12 mx-0 mt-4 mb-5"
                    ></div>
                    <p className="text-left"> By {datum.author.username}</p>
                    <div className="flex item-center align-middle justify-between">
                      <CreatedAt
                        classname={"text-left py-3"}
                        timeStamp={datum.created_at}
                      />

                      <p className="text-left self-center">
                        {datum.created_at}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
     </div>
    </Rootlayout>
  );
};

export default SearchPage;
