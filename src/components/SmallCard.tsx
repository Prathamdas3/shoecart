interface propType {
  title: string;
  alt: string;
  url: string;
}

export default function SmallCard({ alt, url }: propType) {
  return (
    <div className=" w-[18.7rem] bg-base-100 shadow-xl h-60 my-2">
      <figure>
        <img src={url} alt={alt} className="w-[18.7rem]  h-60" />
      </figure>
    </div>
  );
}
