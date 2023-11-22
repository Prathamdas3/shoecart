import { Link } from 'react-router-dom';
interface propType {
  alt: string;
  url: string;
  id: string;
}

export default function SmallCard({ alt, url, id }: propType) {
  return (
    <div className=" w-[18.7rem] bg-base-100 shadow-xl h-60 my-2">
      <Link to={`/details/${id}`}>
        <figure>
          <img src={url} alt={alt} className="w-[18.7rem]  h-60" />
        </figure>
      </Link>
    </div>
  );
}
