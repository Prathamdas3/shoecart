import { useCartContextProvider } from '../context/CartContext';
import CartCard from '../components/CartCard';
import { allData } from '../Data';

type DataType = {
  id: string | any;
  title: string;
  description: string;
  price: number;
  alt: string;
  url: string;
}[];

export default function CartPage() {
  const { totalItems, cartItems } = useCartContextProvider();
  const cartList: DataType = [];

  cartItems &&
    allData.map((product) => {
      if (cartItems[product.id] !== 0) {
        cartList.push(product);
      }
    });

  return (
    <div className="container mx-auto">
      {totalItems === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-2xl font-bold">No items in the cart</h1>
        </div>
      ) : (
        cartList.map((product) => <CartCard key={product.id} data={product} />)
      )}
    </div>
  );
}
