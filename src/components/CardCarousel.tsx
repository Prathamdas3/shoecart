import SmallCard from './SmallCard'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'

import { SmallCardData } from '../db/Data'

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
      {SmallCardData.map((data) => (
        <SwiperSlide>
          <SmallCard alt={data.alt} url={data.url} id={data.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
