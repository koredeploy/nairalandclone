import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, } from "react";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import image1 from "../assets/images/image 113.png";
import greendot from "../assets/icons/Rectangle 2.png";
import redbar from "../assets/images/pseudo.png";
import Loading from "../components/utils/loading";


import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomepageSwiper = () => {
    const { token } = useContext(AuthContext);

    const { data, loading, error } = useFetch(
      "https://nairalandapi5.onrender.com/api/trending"
    );
  return (
    <div className='' style={{backgroundColor: "#7CA778"}}>

    <div className="b-container px-5 sm:px-5 md:px-24 pt-3 pb-12">
    <div className="flex items-center gap-1 my-9">
      <span>
        <img className="object-cover" src={greendot} alt="" />
      </span>
      <h1 className="text-left text-3xl font-light">Trending Post</h1>
    </div>
         <Swiper
         breakpoints={{320:{
            slidesPerView: 1
         },
         375:{
            slidesPerView: 1
         },
         480:{
            slidesPerView:2
         },
         768:{
            slidesPerView:2
         },
         1024:{slidesPerView: 3},
         1440:{slidesPerView: 5},
        }}
        
        spaceBetween={30}
        centeredSlides={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    pagination={{
        clickable: true,
        
    }}
    navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    }}

    modules={[Autoplay, Navigation, Pagination ]}
    >
        { data && data.map((datum)=>(
            <SwiperSlide key={datum.id}>
              <Link to={`storydetail/${datum.id}`}>                    
              <div className='md:h-64 bg-white w-full rounded-tl-md rounded-tr-md'>
                     <img src={`https://res.cloudinary.com/drui6fs9f/${datum.image}` } className="w-full rounded-tl-md rounded-tr-md object-cover h-64" alt="" />
                     </div>
            <div className="bg-white px-5 pt-2 pb-3 rounded-br-md rounded-bl-md mb-11 relative h-36 md:h-36">
            <div className="flex items-center gap-1 absolute -top-9  left-5">
              <span>
                <img src={redbar} alt="" />
              </span>
              <h2 className="text-white">{datum.tags}</h2>
            </div>
              <h2 className="text-left text-sm md:text-lg font-bold w-full xl:w-5/6  my-3">
                {datum.story}
              </h2>
            </div>
            </Link>
 
            </SwiperSlide>
        ))}
        {error && <p className='text-left'>{error}</p>}
      
     
      </Swiper>
    </div>
    </div>
    )}


export default HomepageSwiper