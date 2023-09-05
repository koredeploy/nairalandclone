import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Rootlayout from '../../layout/Rootlayout'
import CreatedAt from '../../components/CreatedAt'
import redbar from '../../assets/images/pseudo.png'
import greendot from '../../assets/icons/Rectangle 2.png' 
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import Loading from '../../components/utils/loading'

const TrendingPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  
  const {data, error, loading} = useFetch("https://nairalandapi5.onrender.com/api/trending", )
  console.log(data);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)
  console.log(currentPost.length);


  return (
    <Rootlayout>
      <div className='b-container px-5 sm:px-5 md:px-24 pt-1'>
      <div className="flex items-center gap-1 my-9">
      <span>
        <img className="object-cover" src={greendot} alt="" />
      </span>
      <h1 className="text-left text-3xl font-light">Trending News</h1>
    </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10 ">
        {loading && <Loading/>}
        {currentPost && currentPost.map((post)=>(
            <div key={post.id} className="  relative sm:mb-3 " >
            
            <div className=" md:h-60 md:max-w-sm min-w-full bg-white w-full rounded-tl-md rounded-tr-md" >
            <img src={`https://res.cloudinary.com/drui6fs9f/${post.image}` }  className="w-full object-cover md:h-60 rounded-md" alt="" />
            </div>  
            <Link to={`/storydetail/${post.id}`}>
            <div className="bg-white px-5 pt-2 pb-5 rounded-br-md rounded-bl-md relative h-auto md:h-56">
              <div className="flex items-center gap-1 absolute -top-9  left-5">
                <span>
                  <img src={redbar} alt="" />
                </span>
                <h2 className="text-white">{post.tags}</h2>
              </div>
                <h2 className="text-left text-sm md:text-base font-bold w-full xl:w-5/6  my-3">
                  {post.tags}
                </h2>
                <div
                  style={{ height: 1, "backgroundColor": "#00000033" }}
                  className="w-11/12 mx-0 mt-4 mb-5"
                ></div>
                <p className="text-left"> By {post.author.username}</p>
                <div className="flex item-center align-middle justify-between">
                  <CreatedAt
                    classname={"text-left py-3"}
                    timeStamp={post.created_at}
                  />
  
                  <p className="text-left self-center">{post.created_at}</p>
                </div>
              </div>
            </Link>
            </div>
        ))}
        {error && <p className="text-left">{error}</p>}
        
    </div>
    <Pagination postPerPage={postPerPage} totalPosts={currentPost.length} setCurrentPage={setCurrentPage}/>
      </div>
    </Rootlayout>
    
    
    
  )
}

export default TrendingPage