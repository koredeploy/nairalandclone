import  { useContext, useEffect, useState } from "react";
import "./CreatePage.css";
// import { base64 } from "../../components/utils/base64";
import AuthContext from "../../context/AuthContext";
import Rootlayout from "../../layout/Rootlayout";
// import Navbar from "../../components/Navbar";
import {useNavigate} from 'react-router-dom'

const CreatePage = () => {
  const navigate = useNavigate()
  const [ptags, setPtags] = useState([]);
  const seperator = " "
  const tags = ptags.join(seperator)

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
  const { createStory, token } = useContext(AuthContext)
  const [title, setTitle] = useState("");
  const [image, setImage] = useState()
  const [story, setStory] = useState("")


  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  }, [])


    let formData = new FormData;
    formData.append("image", image);
    formData.append("title", title);
    formData.append("story", story)
    formData.append("tags", tags)



  // const upload = async (e) => {
  //   const base = await base64(e.target.files[0])
  //   setFile(base)
  // }

  const addToTag = (value) => {
    if (ptags.includes(value)) {
      console.log("Tag already selected");
    } else if (ptags.length >= 1) {
      console.log("You cant select more than 1 tags");
    } else {
      setPtags((prev) => [...prev, value]);
    }
  };


  return (
    <Rootlayout>
    <div className="b-container sm:px-5 md:px-24 my-6 mx-auto">
      <h2 className="mt-5 mb-5 md:text-left sm:text-center text-4xl ">Post Story</h2>
      <div className="w-11/12 md:w-full mx-auto">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          createStory(formData)
        
            }
          }>
          <input
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
            className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            type="text"
            required
            placeholder="TITLE"
          />
          <div className="w-full px-4 bg-white rounded-md mt-5 py-3 border-gray-950 flex gap-2 items-center">
            <p className="text-left text-gray-400">TAGS</p>
            {ptags.map((tag) => (
              <button 
              onClick={()=>{
                console.log('yo!');
                
                console.log(ptags);
              }}
                key={tag}
                className=" rounded-md bg-green-500 px-3 mt-3 mb-3 py-3 text-sm font-light
              leading-6 text-gray-300 shadow-sm "
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-7 border border-gray-400 rounded-md mt-5 mb-5">
            {btns.map((btn) => (
              <button required
                key={btn}
                className="w-fit rounded-md bg-white px-3 mt-3 mb-3 py-3 text-sm font-light
              leading-6 text-gray-300 shadow-sm hover:bg-green-500 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={() => {
                  addToTag(`${btn}`);
                }}
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
  );
};

export default CreatePage;
