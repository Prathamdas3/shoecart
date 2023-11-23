import { v4 as uuidv4 } from 'uuid';

import Carousel1 from './assets/images/carouselImages/carousel1.jpg';
import Carousel2 from './assets/images/carouselImages/carousel2.jpg';
import Carousel3 from './assets/images/carouselImages/carousel3.jpg';
import Carousel4 from './assets/images/carouselImages/carousel4.jpg';

import Product1 from './assets/images/productImage/product1.jpg';
import Product2 from './assets/images/productImage/product2.jpg';
import Product3 from './assets/images/productImage/product3.jpg';
import Product4 from './assets/images/productImage/product4.jpg';
import Product5 from './assets/images/productImage/product5.jpg';
import Product6 from './assets/images/productImage/product6.jpg';
import Product7 from './assets/images/productImage/product7.jpg';
import Product8 from './assets/images/productImage/product8.jpg';

import CardProduct1 from './assets/images/cardImages/card1.jpg';
import CardProduct2 from './assets/images/cardImages/card2.jpg';
import CardProduct3 from './assets/images/cardImages/card3.jpg';
import CardProduct4 from './assets/images/cardImages/card4.jpg';
import CardProduct5 from './assets/images/cardImages/card5.jpg';
import CardProduct6 from './assets/images/cardImages/card6.jpg';
import CardProduct7 from './assets/images/cardImages/card7.jpg';
import CardProduct8 from './assets/images/cardImages/card8.jpg';
import CardProduct9 from './assets/images/cardImages/card9.jpg';
import CardProduct10 from './assets/images/cardImages/card10.jpg';

type DataType = {
  id: string | any;
  title: string;
  description: string;
  price: number;
  alt: string;
  url: string;
}[];

export const CarouselData: DataType = [
  {
    id: uuidv4(),
    title: 'Carousel 1',
    description: 'this is Carousel 1',
    price: 25.0,
    alt: 'Carousel images',
    url: Carousel1,
  },
  {
    id: uuidv4(),
    title: 'Carousel 2',
    description: 'this is Carousel 2',
    price: 23.0,
    alt: 'Carousel images',
    url: Carousel2,
  },
  {
    id: uuidv4(),
    title: 'Carousel 3',
    description: 'this is Carousel 3',
    price: 34.0,
    alt: 'Carousel images',
    url: Carousel3,
  },
  {
    id: uuidv4(),
    title: 'Carousel 4',
    description: 'this is Carousel item 4',
    price: 45.0,
    alt: 'Carousel images',
    url: Carousel4,
  },
];
export const BigCardData: DataType = [
  {
    id: uuidv4(),
    title: 'Item 1',
    description: 'this is Item 1',
    price: 42.0,
    alt: 'Item images',
    url: Product1,
  },
  {
    id: uuidv4(),
    title: 'Item 2',
    description: 'this is Item 2',
    price: 54.0,
    alt: 'Item images',
    url: Product2,
  },
  {
    id: uuidv4(),
    title: 'Item 3',
    description: 'this is Item 3',
    price: 32.0,
    alt: 'Item images',
    url: Product3,
  },
  {
    id: uuidv4(),
    title: 'Item 4',
    description: 'this is Item 4',
    price: 67.0,
    alt: 'Item images',
    url: Product4,
  },
  {
    id: uuidv4(),
    title: 'Item 5',
    description: 'this is Item 5',
    price: 56.0,
    alt: 'Item images',
    url: Product5,
  },
  {
    id: uuidv4(),
    title: 'Item 6',
    description: 'this is Item 6',
    price: 76.0,
    alt: 'Item images',
    url: Product6,
  },
  {
    id: uuidv4(),
    title: 'Item 7',
    description: 'this is Item 7',
    price: 89.0,
    alt: 'Item images',
    url: Product7,
  },
  {
    id: uuidv4(),
    title: 'Item 8',
    description: 'this is Item 8',
    price: 90.0,
    alt: 'Item images',
    url: Product8,
  },
];
export const SmallCardData: DataType = [
  {
    id: uuidv4(),
    title: 'Card Image 1',
    description: 'this is card Item 1',
    price: 62.0,
    alt: 'Card Item images',
    url: CardProduct1,
  },
  {
    id: uuidv4(),
    title: 'Card Image 2',
    description: 'this is card Item 2',
    price: 74.0,
    alt: 'Card Item images',
    url: CardProduct2,
  },
  {
    id: uuidv4(),
    title: 'Card Image 3',
    description: 'this is card Item 3',
    price: 85.0,
    alt: 'Card Item images',
    url: CardProduct3,
  },
  {
    id: uuidv4(),
    title: 'Card Image 4',
    description: 'this is card Item 4',
    price: 97.0,
    alt: 'Card Item images',
    url: CardProduct4,
  },
  {
    id: uuidv4(),
    title: 'Card Image 5',
    description: 'this is card Item 5',
    price: 61.0,
    alt: 'Card Item images',
    url: CardProduct5,
  },
  {
    id: uuidv4(),
    title: 'Card Image 6',
    description: 'this is card Item 6',
    price: 52.0,
    alt: 'Card Item images',
    url: CardProduct6,
  },
  {
    id: uuidv4(),
    title: 'Card Image 7',
    description: 'this is card Item 7',
    price: 31.0,
    alt: 'Card Item images',
    url: CardProduct7,
  },
  {
    id: uuidv4(),
    title: 'Card Image 8',
    description: 'this is card Item 8',
    price: 41.0,
    alt: 'Card Item images',
    url: CardProduct8,
  },
  {
    id: uuidv4(),
    title: 'Card Image 9',
    description: 'this is card Item 9',
    price: 53.0,
    alt: 'Card Item images',
    url: CardProduct9,
  },
  {
    id: uuidv4(),
    title: 'Card Image 10',
    description: 'this is card Item 10',
    price: 40.0,
    alt: 'Card Item images',
    url: CardProduct10,
  },
];

export const allData: DataType = [
  ...BigCardData,
  ...SmallCardData,
  ...CarouselData,
];
