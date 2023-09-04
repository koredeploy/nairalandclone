import { useContext, useEffect, useState } from "react";
import Rootlayout from "../../layout/Rootlayout";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import AuthContext from "../../context/AuthContext";

const DetailPage = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
console.log(id);
console.log(token);
  const {
    data,
    error,
    loading,
  } = useFetch(
    `https://nairalandapi5.onrender.com/api/posts`,
    token
  );

  console.log(error);
  // error && console.log(error);


  // const { data: stories, loading, error } = useFetch(`https://nairalandapi5.onrender.com/api/singlepost/${id}`, token);

  // const getStory = async ()=>{
  //   const res = await axios.get(`https://nairalandapi5.onrender.com/api/singlepost/${id}`,
  //   {headers: {
  //     "Content-Type" : "application/json",
  //     Authorization: `Token ${token}`
  //   }
  // })
  // const data = await res.json()
  // setStoryData(data)
  // }
  // console.log(storyData , "hello");

  // const {  data, loading, error } = useFetch(`https://nairalandapi5.onrender.com/api/singlepost/${id}`, token);

  return (
    <Rootlayout>
      <div>
        {loading && <div> Lading.....</div>}
        {error && <div>{error}</div>}
        {/* {story && (
          <article>
            <h2>{story.title}</h2>
            <p>{story.story}</p>
          </article>
        )} */}
        detail {id}
      </div>
    </Rootlayout>
  );
};

export default DetailPage;
