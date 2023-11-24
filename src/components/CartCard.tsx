import { useNavigate } from 'react-router-dom';
import { useCartContextProvider } from '../context/CartContext';
import { Plus, Minus } from 'lucide-react';

type DataType = {
  id: string | any;
  title: string;
  description: string;
  price: number;
  alt: string;
  url: string;
};

interface Data {
  data: DataType;
}

export default function CartCard({ data }: Data) {
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    manualUpdateItemNumber,
  } = useCartContextProvider();

  let numberOfItems: number = 0;
  if (data.id !== undefined && cartItems !== undefined)
    numberOfItems = cartItems[data.id];

  return (
    <div className="card card-side bg-base-100 mx-auto shadow-xl my-2 h-72 w-[70%]">
      <figure
        onClick={() => navigate(`/details/${data.id}`)}
        className="w-[50%] "
      >
        <img src={data.url} alt="Movie" className="focus" />
      </figure>
      <div className="card-body">
        <h2
          className="card-title"
          onClick={() => navigate(`/details/${data.id}`)}
        >
          {data.title}
        </h2>
        <p onClick={() => navigate(`/details/${data.id}`)}>
          {data.description}
        </p>
        <p className="font-bold text-xl">${data.price}</p>
        <div className="flex justify-between card-action ">
          <button
            className="btn btn-ghost "
            onClick={() => addToCart(data.id && data.id)}
          >
            <Plus />
          </button>
          <input
            className="input input-ghost w-[58px] max-w-xs "
            value={numberOfItems}
            onChange={(e) =>
              manualUpdateItemNumber(data.id && data.id, Number(e.target.value))
            }
          />
          <button
            className="btn btn-ghost"
            onClick={() => removeFromCart(data.id && data.id)}
          >
            <Minus />
          </button>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-error w-full text-white text-xl"
            onClick={() => deleteFromCart(data.id && data.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
