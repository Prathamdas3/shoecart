import Carousel from '../components/Carousel';
import BigCard from '../components/BigCard';
import CardCarousal from '../components/CardCarousel';

import { BigCardData } from '../Data';

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <Carousel />
      <div className="grid grid-cols-4 my-4 gap-y-4">
        {BigCardData.map((data) => (
          <BigCard
            key={data.id}
            id={data.id}
            title={data.title}
            des={data.description}
            alt={data.alt}
            url={data.url}
          />
        ))}
      </div>
      <CardCarousal />
    </div>
  );
}
