import { useNavigate, useParams } from 'react-router-dom';
import useDetails from '../hooks/useDetails';
export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useDetails(id);

  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl container mx-auto mt-5 w-full min-h-[90vh] ">
      <figure className="w-[60%]">
        <img src={data.url} alt="Album" className="h-full" />
      </figure>
      <div className="card-body w-[50%]">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-success w-[90%] text-white text-2xl font-bold cursor-pointer">
            Add to Cart
          </button>
          <button
            onClick={() => navigate('/')}
            className="btn bg-primary w-[90%] text-white text-2xl font-bold cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
