import { Link } from 'react-router-dom'
import { propType } from '../types'

export default function SmallCard({ alt, url, id }: propType) {
  return (
    <div className=" w-[18.7rem] bg-base-100 shadow-xl h-60 my-2">
      <Link to={`/details/${id}`}>
        <figure>
          <img src={url} alt={alt} className="w-[18.7rem]  h-60" />
        </figure>
      </Link>
    </div>
  )
}
