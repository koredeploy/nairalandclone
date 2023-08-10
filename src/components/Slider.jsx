
import images from './image';
import arrowbtn from "../assets/icons/Component 62.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation,  } from 'swiper/modules';
import {motion} from 'framer-motion'

const Slider = () =>{
    return(
        <>
        <Swiper
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

    modules={[Autoplay, Navigation, ]}
    >
        {images.map((img)=>( 
            
        <SwiperSlide key={img.id}>
            <div className='relative w-full'>
                <img className='  w-full object-cover' src={img.img} alt="" />
               
    <div>
    <motion.h1 
      initial= {{y: '100vw' }}
      animate = {{ x: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 120 }}
    className='absolute top-2/4 text-center left-1/4 right-1/4 text-white font-bold text-3xl'>The Future of Artificial Intellegience: Friend or foe?</motion.h1>
        <div className=''>
            <img src={arrowbtn} alt="" className='swiper-button-prev sm:w-8 sm:h-8 md:w-16 md:h-16 absolute top-2/4 left-9' />
        </div>
        <div>
        <img src={arrowbtn} alt="" className='swiper-button-next sm:w-8 sm:h-8 md:w-16 md:h-16 top-2/4 right-9' />
        </div>
    </div>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>

        </>
    )
}

export default Slider