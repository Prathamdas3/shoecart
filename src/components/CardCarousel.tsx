import SmallCard from './SmallCard';
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

import Item1 from '../assets/images/item.jpg';
import Item2 from '../assets/images/item1.jpg';
import Item3 from '../assets/images/item2.jpg';

export default function CardCarousal() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
      spaceBetween={5}
      slidesPerView={5}
      navigation
      scrollbar={{ draggable: true }}
      className="my-4 py-2"
    >
      <SwiperSlide>
        <SmallCard title="Item1 " alt="item1 " url={Item1} />
      </SwiperSlide>
      <SwiperSlide>
        <SmallCard title="Item2 " alt="item2 " url={Item2} />
      </SwiperSlide>
      <SwiperSlide>
        <SmallCard title="Item3 " alt="item3 " url={Item3} />
      </SwiperSlide>
      <SwiperSlide>
        <SmallCard title="Item1 " alt="item1 " url={Item1} />
      </SwiperSlide>
      <SwiperSlide>
        <SmallCard title="Item2 " alt="item2 " url={Item2} />
      </SwiperSlide>
      <SwiperSlide>
        <SmallCard title="Item3 " alt="item3 " url={Item3} />
      </SwiperSlide>
      <SwiperSlide>
        <SmallCard title="Item1 " alt="item1 " url={Item1} />
      </SwiperSlide>
      <SwiperSlide>
        <SmallCard title="Item2 " alt="item2 " url={Item2} />
      </SwiperSlide>
      <SwiperSlide>
        <SmallCard title="Item3 " alt="item3 " url={Item3} />
      </SwiperSlide>
    </Swiper>
  );
}
