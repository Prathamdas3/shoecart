import { Link } from 'react-router-dom';
interface propType {
  title: string;
  alt: string;
  url: string;
}
export default function Card({ title, alt, url }: propType) {
  return (
    <div className="card w-[370px] bg-base-100  h-96  max-w-sm mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-xl  transform hover:scale-105 transition-all duration-200 ease-out ">
      <figure>
        <img src={url} alt={alt} className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Link to="/details" className="font-bold text-lg flex justify-end">
          See more
        </Link>
      </div>
    </div>
  );
}
