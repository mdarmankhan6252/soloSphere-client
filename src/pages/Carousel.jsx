import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//images

import image_1 from '../assets/carousel1.jpg'
import image_2 from '../assets/carousel2.jpg'
import image_3 from '../assets/carousel3.jpg'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from '../components/Slide';


const Carousel = () => {
   return (
      <div className='container mx-auto px-6 my-10'>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
               delay: 4000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <Slide image={image_1} title="Get Your Web Development Project in a Moment." />
            </SwiperSlide>
            <SwiperSlide>
               <Slide image={image_2} title="Get Your Graphics Design Project in a Moment." />
            </SwiperSlide>
            <SwiperSlide>
               <Slide image={image_3} title="Get Your Digital Marketing Project in a Moment." />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Carousel;