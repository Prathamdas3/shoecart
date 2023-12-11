import { useNavigate, useParams } from 'react-router-dom';
import useDetails from '../hooks/useDetails';
import { useCartContextProvider } from '../context/CartContext';
import { useWishContextProvider } from '../context/WishListContext';
import { Plus, Minus, ShoppingBag } from 'lucide-react';

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  if (id !== undefined) {
    localStorage.setItem('id', id);
  }
  const data = useDetails();
  const { cartItems, addToCart, removeFromCart } = useCartContextProvider();
  const { toggleWishListButton, bucketItems } = useWishContextProvider();

  const backFunction = () => {
    navigate('/');
    localStorage.removeItem('id');
  };
  let numberOfItems: number | false =
    id !== undefined && cartItems !== undefined && cartItems[id];

  const cartFunction = () => {
    navigate('/cart');
    addToCart(id !== undefined ? id : '');
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl container mx-auto  mt-5 w-full ">
      {data && (
        <>
          <figure className="w-[60%] ">
            <img src={data.url} alt="Album" className="max-h-[88vh]" />
          </figure>
          <div className="card-body w-[50%]">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.description}</p>
            <div className="justify-end">
              {bucketItems[id !== undefined ? id : ''] !== 0 ? (
                <ShoppingBag
                  onClick={() =>
                    toggleWishListButton(id !== undefined ? id : '')
                  }
                  fill="white"
                  stroke="gray"
                  className="cursor-pointer"
                />
              ) : (
                <ShoppingBag
                  onClick={() =>
                    toggleWishListButton(id !== undefined ? id : '')
                  }
                  className="cursor-pointer"
                />
              )}
            </div>

            <div className="flex justify-around card-action ">
              <button
                className="btn btn-ghost "
                onClick={() => addToCart(id !== undefined ? id : '')}
              >
                <Plus />
              </button>
              <div className="flex items-center justify-center px-5">
                {numberOfItems}
              </div>
              <button
                className="btn btn-ghost"
                onClick={() => removeFromCart(id !== undefined ? id : '')}
              >
                <Minus />
              </button>
            </div>
            <div className="card-actions justify-center">
              <button
                className="btn bg-success w-[90%] text-white text-2xl font-bold cursor-pointer"
                onClick={cartFunction}
              >
                Add to Cart
              </button>
              <button
                onClick={backFunction}
                className="btn bg-primary w-[90%] text-white text-2xl font-bold cursor-pointer"
              >
                Go Back
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
