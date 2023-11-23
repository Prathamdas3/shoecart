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
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useCartContextProvider();

  let numberOfItems: number | false =
    data.id !== undefined && cartItems !== undefined && cartItems[data.id];

  return (
    <div className="card card-side bg-base-100 shadow-xl my-2">
      <figure onClick={() => navigate(`/details/${data.id}`)}>
        <img src={data.url} alt="Movie" />
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
        <div className="flex justify-center card-action ">
          <button
            className="btn btn-ghost justify-start"
            onClick={() => addToCart(data.id && data.id)}
          >
            <Plus />
          </button>
          <div className="flex items-center justify-center px-5">
            {numberOfItems}
          </div>
          <button
            className="btn btn-ghost"
            onClick={() => removeFromCart(data.id && data.id)}
          >
            <Minus />
          </button>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-error"
            onClick={() => deleteFromCart(data.id && data.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
