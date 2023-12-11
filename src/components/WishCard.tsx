import { useNavigate } from 'react-router-dom'
import { useWishContextProvider } from '../context/WishListContext'
import { DataT } from '../types'

export default function CartCard({
  id,
  title,
  description,
  price,
  alt,
  url,
}: DataT) {
  const navigate = useNavigate()
  const { setBucketItems } = useWishContextProvider()

  return (
    <div className="card card-side bg-base-100 mx-auto shadow-xl my-2 h-72 w-[70%]">
      <figure onClick={() => navigate(`/details/${id}`)} className="w-[50%] ">
        <img src={url} alt={alt} className="focus" />
      </figure>
      <div className="card-body">
        <h2 className="card-title" onClick={() => navigate(`/details/${id}`)}>
          {title}
        </h2>
        <p onClick={() => navigate(`/details/${id}`)}>{description}</p>
        <p className="font-bold text-xl">${price}</p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-error w-full text-white text-xl"
            onClick={() => setBucketItems((prev) => ({ ...prev, [id]: 0 }))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
