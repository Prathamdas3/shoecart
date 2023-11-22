import { BigCardData, SmallCardData, CarouselData } from '../Data';
type DataType = {
  id: string | any;
  title: string;
  description: string;
  price: number;
  alt: string;
  url: string;
}[];
export default function useDetails(id: string | undefined) {
  const data: DataType = [];
  BigCardData.map((details) => {
    if (details.id === id) {
      data.push(details);
    }
  });
  SmallCardData.map((details) => {
    if (details.id === id) {
      data.push(details);
    }
  });
  CarouselData.map((details) => {
    if (details.id === id) {
      data.push(details);
    }
  });
  return data[0];
}
