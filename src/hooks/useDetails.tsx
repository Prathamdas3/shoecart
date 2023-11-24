import { allData } from '../Data';
type DataType = {
  id: string | any;
  title: string;
  description: string;
  price: number;
  alt: string;
  url: string;
}[];
export default function useDetails() {
  const id = localStorage.getItem('id');
  const data: DataType = [];
  allData.map((details) => {
    if (details.id === id) {
      data.push(details);
    }
  });

  return data[0];
}
