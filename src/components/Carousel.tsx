import { Link } from 'react-router-dom'
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

import { CarouselData } from '../db/Data'

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
      {CarouselData.map((data) => (
        <SwiperSlide>
          <div className="relative">
            <Link to={`/details/${data.id}`}>
              <img src={data.url} alt={data.alt} className="w-full h-[25rem]" />
              <span className="absolute bottom-0 left-5 z-10 text-white my-2">
                <h2 className="text-lg font-bold">{data.title}</h2>
                <p>{data.description}</p>
              </span>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
