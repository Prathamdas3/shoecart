import { useNavigate } from 'react-router-dom';
import { useWishContextProvider } from '../context/WishListContext';

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
  const { setBucketItems } = useWishContextProvider();

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

        <div className="card-actions justify-end">
          <button
            className="btn btn-error w-full text-white text-xl"
            onClick={() =>
              setBucketItems((prev) => ({ ...prev, [data.id]: 0 }))
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
