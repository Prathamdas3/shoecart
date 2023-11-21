import Carousel from '../components/Carousel';
import BigCard from '../components/BigCard';
import CardCarousal from '../components/CardCarousel';

import Item1 from '../assets/images/item.jpg';
import Item2 from '../assets/images/item1.jpg';
import Item3 from '../assets/images/item2.jpg';

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <Carousel />
      <div className="grid grid-cols-4 my-4 gap-y-4">
        <BigCard title="item1 " alt="item1 " url={Item1} />
        <BigCard title="item2 " alt="item2 " url={Item2} />
        <BigCard title="item3 " alt="item3 " url={Item3} />
        <BigCard title="item2 " alt="item2 " url={Item2} />
        <BigCard title="item3 " alt="item3 " url={Item3} />
        <BigCard title="item2 " alt="item2 " url={Item2} />
        <BigCard title="item3 " alt="item3 " url={Item3} />
        <BigCard title="item2 " alt="item2 " url={Item2} />
      </div>
      <CardCarousal />
    </div>
  );
}
