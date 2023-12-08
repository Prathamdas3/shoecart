import Carousel from '../components/Carousel'
import BigCard from '../components/BigCard'
import CardCarousal from '../components/CardCarousel'
import { useCategoryContextProvider } from '../context/CategoryContext'
import '../styles/index.css'
import Category from '../components/CategorySection'
import { X } from 'lucide-react'

export default function HomePage() {
  const { isCategoryMenuOpen, sortData, option } = useCategoryContextProvider()

  return (
    <>
      <div
        className={` container mx-auto  ${isCategoryMenuOpen ? 'flex' : ''}`}
      >
        <Category />
        <div className={`${isCategoryMenuOpen ? 'w-[80%]' : 'w-full'}`}>
          <Carousel />

          <div className="grid grid-cols-4 my-4 gap-y-4">
            {sortData.map((data) => (
              <BigCard
                key={data.id}
                id={data.id}
                title={data.title}
                des={data.description}
                alt={data.alt}
                url={data.url}
              />
            ))}
          </div>
          <CardCarousal />
        </div>
      </div>
    </>
  )
}
