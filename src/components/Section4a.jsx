// import { Children } from "react"
import { useContext } from "react";
import greendot from "../assets/icons/Rectangle 2.png";
import AuthContext from "../context/AuthContext";
// import useFetch from "../hooks/useFetch";
// import image1 from "../assets/images/image 113.png";
// import Loading from "../components/utils/loading";
import CreatedAt from "../components/CreatedAt";
import { Link } from "react-router-dom";

const Section4a = ({ data, error }) => {
  // const [img, setImg] = useState()

  // const data2=   Object.entries(data.results)
  // console.log(data[0]);
  data && console.log(data);
  return (
    <div className="bg-white">
      <div className="b-container px-5 sm:px-5 md:px-24 pt-3">
        <div className="flex items-center gap-1 my-9">
          <span>
            <img className="object-cover" src={greendot} alt="" />
          </span>
          <h1 className="text-left text-3xl font-light">Sport News</h1>
        </div>
        {/* section1 */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-7 pb-10 ">
          {data &&
            data.map(
              (datum) =>
             (   datum.tags === "Sports" && 
                  <div key={datum.id} className="  relative sm:mb-3 ">
                    <div className=" md:max-w-sm  md:h-56 bg-white w-full rounded-md">
                      <img
                        src={`https://res.cloudinary.com/drui6fs9f/${datum.image}`}
                        className="md:h-56 w-full object-cover rounded-md"
                        alt=""
                      />
                    </div>
                    <div className="bg-white px-5 pt-2 pb-5 rounded-br-md rounded-bl-md relative h-auto md:h-56">
                      <div className="flex item-center align-middle justify-between">
                        <p className="text-left text-gray-500 font-bold self-center">
                          {datum.tags}
                        </p>
                        <CreatedAt
                          classname={"text-left py-3 font-bold text-gray-500"}
                          timeStamp={datum.created_at}
                        />
                      </div>

                      <Link to={`/storydetail/${datum.id}`}>
                        <h2 className="text-left text-blue-700 text-sm md:text-xl font-bold w-full xl:w-5/6  my-3">
                          {datum.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                )
            )}

          {error && <p className="text-left">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Section4a;
