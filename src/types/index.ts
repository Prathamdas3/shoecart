//component types start
//BigCard
export type PropType = {
  id: string
  title: string
  des: string
  alt: string
  url: string
}
//cartCard
export type DataT = {
  id: string | any
  title: string
  description: string
  price: number
  alt: string
  url: string
}
//small Card
export type propType = {
  alt: string
  url: string
  id: string
}

//Component types end

//context types start
export type childT = {
  children: React.ReactNode
}

export type CartType = {
  cartItems: { [key: string]: number }
  setCartItems?: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>

  addToCart: (itemId: string) => void
  removeFromCart: (itemId: string) => void
  deleteFromCart: (itemId: string) => void
  manualUpdateItemNumber: (itemId: string, itemNumber: number) => void
  getTotalAmount: () => number
  totalItems: number
}

export type WishListType = {
  bucketItems: { [key: string]: number }
  setBucketItems: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >
  toggleWishlistStatus: boolean
  toggleWishListButton: (itemId: string) => void
  totalItems: () => number
}

export type CategoryType = {
  isCategoryMenuOpen: boolean
  setIsCategoryMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  sortData: DataType
  option: number
  setOption: React.Dispatch<React.SetStateAction<number>>
}
//context types end

//hooks types
export type DataType = {
  id: string | any
  title: string
  description: string
  price: number
  alt: string
  url: string
}[]
//hooks types end
