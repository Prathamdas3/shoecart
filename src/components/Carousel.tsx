import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';
import Image4 from '../assets/images/image4.jpg';
export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      parallax
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={Image1} alt="image 1" className="w-full h-[25rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image2} alt="image 2" className="w-full h-[25rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image3} alt="image 3" className="w-full h-[25rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image4} alt="image 4" className="w-full h-[25rem]" />
      </SwiperSlide>
    </Swiper>
  );
}
