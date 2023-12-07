import { useNavigate } from 'react-router-dom'
import { useWishContextProvider } from '../context/WishListContext'
import WishCard from '../components/WishCard'
import { allData } from '../Data'
import { DataType } from '../types'

export default function CartPage() {
  const { bucketItems, totalItems } = useWishContextProvider()
  const cartList: DataType = []
  const navigate = useNavigate()

  bucketItems &&
    allData.map((product) => {
      if (bucketItems[product.id] !== 0) {
        cartList.push(product)
      }
    })

  return (
    <div className="container mx-auto">
      {totalItems() === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
          <h1 className="text-2xl font-bold ">Your Wish List is empty </h1>
          <button
            className="btn btn-primary text-white rounded-5xl w-1/3 text-xl font-bold"
            onClick={() => navigate('/')}
          >
            Add items
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-white text-4xl font-bold mt-2 mb-10">
            Your wish List Items
          </h1>
          {cartList.map((product) => (
            <WishCard key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  )
}
