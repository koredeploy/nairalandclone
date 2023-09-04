import { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import Rootlayout from '../layout/Rootlayout'
import axios from 'axios'
import { toast } from 'react-hot-toast'


const EditStory = () => {

const {token} = useContext(AuthContext)
const {id} = useParams()
const [singlePost, setSinglePost] = useState(null)
const [error, setError] = useState(null)
const [loading, setLoading]= useState(true)

const [title, setTitle] = useState("");
const [tags, setTags] = useState("");
const [story, setStory] = useState("");
const [image, setImage] = useState("")
const navigate = useNavigate()
const btns = [
    "News Feed",
    "Crime",
    "Sports",
    "Entertainment",
    "Culture",
    "Finance",
    "Politics",
    "Fashion",
    "Science",
    "LifeStyle",
    
  ];

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
      setTitle(data.title)
      setTags(data.tags)
      setStory(data.story)
      setImage(data.image)

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


//   
  let formData = new FormData;
  formData.append("image", image);
  formData.append("title", title);
  formData.append("story", story)
  formData.append("tags", tags)

  console.log(formData);
  
  return (
    <Rootlayout>
    <div className="b-container sm:px-5 md:px-24 my-6 mx-auto">
      <h2 className="mt-5 mb-5 md:text-left sm:text-center text-4xl ">Post Story</h2>
      <div className="w-11/12 md:w-full mx-auto">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          
            }
          }>
          <input
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
            className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            type="text"
            value={title}
            required
            placeholder="TITLE"
          />
          <div className="w-full px-4 bg-white rounded-md mt-5 py-3 border-gray-950 flex gap-2 items-center">
            <p className="text-left text-gray-400">TAGS</p>
    
              <button 
              value={tags}
            className=" rounded-md bg-green-500 px-3 mt-3 mb-3 py-3 text-sm font-light
              leading-6 text-gray-300 shadow-sm "
              >{tags}
              </button>
            
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-7 border border-gray-400 rounded-md mt-5 mb-5">
            {btns.map((btn) => (
              <button required
                key={btn}
                className="w-fit rounded-md bg-white px-3 mt-3 mb-3 py-3 text-sm font-light
              leading-6 text-gray-300 shadow-sm hover:bg-green-500 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {btn} +
              </button>
            ))}
          </div>
          <textarea
          onChange={(e)=>{
            setStory(e.target.value)
          }}
            name=""
            id=""
            cols="20"
            rows="13"
            type="text"
            required
            value={story}
            className="w-full py-5 px-4 border border-gray-400 rounded-md outline-none bg-inherit my-2 placeholder:text-gray-400"
            placeholder="...Write Something"
          ></textarea>

          <div className="mt-3 mb-3  items-center">
          <input required type="file" className="w-3/4 mx-auto my-2" onChange={(e)=>{
            setImage(e.target.files[0])
          }} />

          </div>

          <button className="text-white bg-green-800 hover:bg-green-700 px-3 py-3 w-2/5 rounded-md ">
            Submit
          </button>
        </form>
      </div>
    </div>
    </Rootlayout>
  )}

export default EditStory