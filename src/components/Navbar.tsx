import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCartContextProvider } from '../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCartContextProvider();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    if (isSearchModalOpen) {
      setIsSearchModalOpen(false);
    } else {
      setIsSearchModalOpen(true);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <button onClick={() => navigate('/')} className=" text-2xl font-bold">
          ShoeKart
        </button>
      </div>
      <div className="flex-none">
        {isSearchModalOpen && (
          <div className="">
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost w-full max-w-xs"
            />
          </div>
        )}
        <button className="cursor-pointer ml-2">
          <Search size={23} onClick={toggleModal} />
        </button>

        <Link to="/cart">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle cursor-pointer"
            >
              <div className="indicator">
                <ShoppingCart size={23} />
                {totalItems > 0 && (
                  <span className="badge badge-sm indicator-item text-primary">
                    {totalItems}
                  </span>
                )}
              </div>
            </label>
          </div>
        </Link>
        <Link to={'/wish'}>
          <ShoppingBag size={20} />
        </Link>
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
