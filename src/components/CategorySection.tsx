import { useCategoryContextProvider } from '../context/CategoryContext'
import { X } from 'lucide-react'

export default function CategorySection() {
  const { isCategoryMenuOpen, setIsCategoryMenuOpen, setOption } =
    useCategoryContextProvider()

  return (
    <>
      {isCategoryMenuOpen && (
        <div className="border-r-2 border-slate-600 mr-4 w-1/5 p-5 ">
          <div className="flex justify-around items-center">
            <h1 className="font-bold text-2xl text-slate-400 flex-1 ">
              Category
            </h1>
            <button
              onClick={() => setIsCategoryMenuOpen(false)}
              className="flex justify-center items-center mr-2"
            >
              <X size={30} />
            </button>
          </div>
          <div className="my-5">
            <h2 className="font-bold text-lg ">Sort </h2>

            <div>
              <input
                type="radio"
                name="sorting"
                onClick={() => setOption(0)}
                title="Low to High"
                defaultChecked
              />
              <span> </span>
              All
            </div>
            <div>
              <input
                type="radio"
                name="sorting"
                onClick={() => setOption(1)}
                title="Low to High"
              />
              <span> </span>
              Low to High
            </div>
            <div>
              <input
                type="radio"
                name="sorting"
                onClick={() => setOption(2)}
                title="High to Low"
              />
              <span> </span>High to Low
            </div>
          </div>
          <div className="my-5">
            <h2 className="font-bold text-lg">Price</h2>
          </div>
          <div className="my-5">
            <h2 className="font-bold text-lg">Brand</h2>
          </div>
          <div className="my-5">
            <h2 className="font-bold text-lg">Color</h2>
          </div>
        </div>
      )}
    </>
  )
}
