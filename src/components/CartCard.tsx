import { useNavigate } from 'react-router-dom'
import { useCartContextProvider } from '../context/CartContext'
import { Plus, Minus } from 'lucide-react'
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
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    manualUpdateItemNumber,
  } = useCartContextProvider()

  let numberOfItems: number = 0
  if (id !== undefined && cartItems !== undefined) numberOfItems = cartItems[id]

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
        <div className="flex justify-between card-action ">
          <button
            className="btn btn-ghost "
            onClick={() => addToCart(id && id)}
          >
            <Plus />
          </button>
          <input
            className="input input-ghost w-[58px] max-w-xs "
            value={numberOfItems}
            onChange={(e) =>
              manualUpdateItemNumber(id && id, Number(e.target.value))
            }
          />
          <button
            className="btn btn-ghost"
            onClick={() => removeFromCart(id && id)}
          >
            <Minus />
          </button>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-error w-full text-white text-xl"
            onClick={() => deleteFromCart(id && id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
