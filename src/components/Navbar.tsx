import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, ShoppingCart, X } from 'lucide-react'
import { useCartContextProvider } from '../context/CartContext'
import { allData } from '../Data'
import { DataType } from '../types'

export default function Navbar() {
  const { totalItems } = useCartContextProvider()
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false)
  const [filterData, setFilterData] = useState<DataType>([])

  const toggleModal = () => {
    if (isSearchModalOpen) {
      setIsSearchModalOpen(false)
      setFilterData([])
    } else {
      setIsSearchModalOpen(true)
    }
  }

  const handleSearch = (e: any) => {
    const wordEntered = e.target.value
    const filteredData = allData.filter((data) => {
      return data.title.toLowerCase().includes(wordEntered.toLowerCase())
    })
    wordEntered === '' ? setFilterData([]) : setFilterData(filteredData)
  }

  const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <button onClick={() => navigate('/')} className=" text-2xl font-bold">
          ShoeKart
        </button>
      </div>
      <div className="flex-none">
        {isSearchModalOpen && (
          <div className="flex justify-center gap-2 ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost w-full max-w-xs focus:outline-none focus:border-none"
              onChange={handleSearch}
            />
            {filterData.length !== 0 && (
              <div className=" absolute z-50 rounded-sm mt-10 ml-10 h-[15rem] overflow-y-auto overflow-x-hidden flex justify-center flex-col w-[13%] bg-slate-700 ">
                {filterData.map((value) => (
                  <Link
                    to={`/details/${value.id}`}
                    className="w-full mx-auto border border-slate-600 px-4 py-2  "
                  >
                    <p>{value.title}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
        <button className="cursor-pointer ml-2">
          {isSearchModalOpen ? (
            <X size={23} onClick={toggleModal} />
          ) : (
            <Search size={23} onClick={toggleModal} />
          )}
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
  )
}
