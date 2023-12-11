import { useNavigate } from 'react-router-dom'
import { useCartContextProvider } from '../context/CartContext'
import CartCard from '../components/CartCard'
import { allData } from '../db/Data'
import { DataType } from '../types'

export default function CartPage() {
  const { totalItems, cartItems, getTotalAmount } = useCartContextProvider()
  const cartList: DataType = []
  const navigate = useNavigate()

  cartItems &&
    allData.map((product) => {
      if (cartItems[product.id] !== 0) {
        cartList.push(product)
      }
    })

  return (
    <div className="container mx-auto">
      {totalItems === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
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
            Your Cart Items
          </h1>
          {cartList.map((product) => (
            <CartCard key={product.id} {...product} />
          ))}

          <hr className="mx-auto w-3/4 border-gray-600 mt-3" />
          <p className=" text-3xl my-5 mx-auto w-3/4 text-right">
            SubTotal ({totalItems} items):
            <span className="text-white text-4xl font-bold">
              ${getTotalAmount()}
            </span>
          </p>
          <div className="flex  my-5 justify-around">
            <button
              className="btn btn-primary text-white mx-auto w-[40%] text-xl font-bold "
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </button>
            <button className="btn btn-success text-white mx-auto w-[40%] text-xl font-bold ">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
