import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useToggle } from '@reactuses/core';
import { useCartContextProvider } from '../context/CartContext';

export default function Navbar() {
  const [on, toggle] = useToggle(true);
  const { totalItems } = useCartContextProvider();
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <button onClick={() => navigate('/')} className=" text-2xl font-bold">
          ShoeKart
        </button>
      </div>
      <div className="flex-none">
        <button className="" onClick={toggle}>
          <Search size={23} />
        </button>
        {on ? (
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        ) : (
          <Search />
        )}
        <Link to="/cart">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle cursor-pointer"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="badge badge-sm indicator-item text-primary">
                    {totalItems}
                  </span>
                )}
              </div>
            </label>
          </div>
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
