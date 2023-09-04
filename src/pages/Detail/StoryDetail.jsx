import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import useFetch from '../../hooks/useFetch'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Rootlayout from '../../layout/Rootlayout'
import Loading from '../../components/utils/loading'
import redbar from '../../assets/images/pseudo.png'
import CreatedAt from '../../components/CreatedAt'
import greendot from "../../assets/icons/Rectangle 2.png"


const StoryDetail = () => {
    const [singlePost, setSinglePost] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading]= useState(true)
    const {token} = useContext(AuthContext)
    const {id} = useParams()
    console.log(id);

    useEffect(()=>{
      const getData = async ()=>{
        const res = await axios.get(`https://nairalandapi5.onrender.com/api/singlepost/${id}`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
            },
        })
        const data = res.data
        console.log(data.story);
        setSinglePost(data)

      }
      setTimeout(()=>{
        getData().catch((error) => {
          console.log(error);
          setError("Oops Something went wrong");
          setLoading(false)
          
        });
      }, 1000)
    },[] )

    console.log(singlePost);

    const {data } = useFetch("https://nairalandapi5.onrender.com/api/trending/")
    console.log(data);
   
  return (
    <Rootlayout>
     <div className='px-5 sm:px-5 md:px-24'>
      
     <div className='flex flex-col md:flex-row w-full justify-between gap-10 text-left'>
        <div className='w-full my-5'>
       {singlePost && 
       <div className=''>
        <div className='flex gap-2'>
        <span>
        <img src={greendot} alt="" />
        </span>
        <p className=''>{singlePost.tags}</p>
        </div>
        <h1 className='text-gray-700 font-semibold py-3'> {singlePost.title}</h1>
        <img src={`https://res.cloudinary.com/drui6fs9f/${singlePost.image}` } className="w-full object-cover" alt="" />
        <p>{singlePost.story}</p>
       </div>
       }
       </div>
       <div className=' my-5'>
       <div className='flex gap-2 py-5'>
       <span><img src={greendot} alt="" /></span>
        <h1 className=''>Trending Post</h1>
       </div>
        <div className="grid grid-cols-1 md:w-56 sm:w-full mx-auto gap-10  ">
      {data &&
        data.slice(0, 4).map((datum) => (
          <div key={datum.id} className="  relative sm:mb-3 " >
            
          <div className="  bg-white w-full rounded-tl-md rounded-tr-md" >
          <img src={`https://res.cloudinary.com/drui6fs9f/${datum.image}` }  className="w-full md:w-56 h-full md:h-32 object-cover rounded-md" alt="" />
          </div>  
          <Link to={`/storydetail/${datum.id}`}>
          <div className="bg-white px-5 pt-2 pb-5 rounded-br-md rounded-bl-md relative ">
            {/* <div className="flex items-center gap-1 absolute -top-9  left-5">
              <span>
                {" "}
                <img src={redbar} alt="" />
              </span>
              <h2 className="">{datum.tags}</h2>
            </div> */}
              <h2 className="text-left text-sm md:text-base font-bold w-full xl:w-5/6  my-3">
                {datum.tags}
              </h2>
              <div
                style={{ height: 1, "backgroundColor": "#00000033" }}
                className="w-11/12 mx-0 mt-4 mb-5"
              ></div>
              <p className="text-left text-sm"> By {datum.author.username}</p>
              <div className="flex item-center align-middle justify-between">
                <CreatedAt
                  classname={"text-left py-3 text-sm"}
                  timeStamp={datum.created_at}
                />

                <p className="text-left self-center text-sm">{datum.created_at}</p>
              </div>
            </div>
          </Link>
          </div>
        ))}
        {error && <p className="text-left">{error}</p>}
        
    </div>
       </div>
      
      </div>
     </div>
    </Rootlayout>
  )
}

export default StoryDetail