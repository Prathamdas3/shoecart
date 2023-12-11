import { Link } from 'react-router-dom'
import { PropType } from '../types'
import { useCategoryContextProvider } from '../context/CategoryContext'

export default function Card({ title, alt, url, des, id }: PropType) {
  const { isCategoryMenuOpen } = useCategoryContextProvider()
  return (
    <div
      className={`card  ${
        isCategoryMenuOpen ? 'w-72' : 'w-[370px]'
      } bg-base-100  h-96  max-w-sm mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-xl  transform hover:scale-105 transition-all duration-200 ease-out`}
    >
      <figure>
        <img src={url} alt={alt} className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{des}</p>
        <Link
          to={`/details/${id}`}
          className="font-bold text-lg flex justify-end cursor-pointer"
        >
          See more
        </Link>
      </div>
    </div>
  )
}
