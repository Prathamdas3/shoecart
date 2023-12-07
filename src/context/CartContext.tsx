import { useState, createContext, useContext } from 'react'
import { allData } from '../Data'
import { childT, CartType } from '../types'

// context creation
const cartContext = createContext<CartType | null>(null)

//functions

const defaultCartItems = (): { [key: string]: number } => {
  let idList: string[] = []
  let cart: { [id: string]: number } = {}
  allData.map((data) => {
    idList.push(data.id)
  })

  for (let id of idList) {
    for (let i = 0; i < idList.length; i++) {
      cart[id] = 0
    }
  }
  return cart
}

// context distribution
export const ContextProvider = ({ children }: childT) => {
  const [totalItems, setTotalItems] = useState<number>(0)

  const [cartItems, setCartItems] = useState<{ [key: string]: number }>(
    defaultCartItems()
  )

  const addToCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    setTotalItems(totalItems + 1)
  }
  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }))
    totalItems > 0 ? setTotalItems(totalItems - 1) : 0
  }

  const deleteFromCart = (itemId: string) => {
    setTotalItems(totalItems - cartItems[itemId])
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }))
  }

  const manualUpdateItemNumber = (itemId: string, itemNumber: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: itemNumber }))
    setTotalItems(totalItems + itemNumber - 1)
  }

  const getTotalAmount = (): number => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allData.find((product) => product.id === item)
        if (itemInfo !== undefined) {
          totalAmount += cartItems[item] * itemInfo.price
        }
      }
    }
    return totalAmount
  }
  const data = {
    cartItems,
    addToCart,
    removeFromCart,
    totalItems,
    deleteFromCart,
    manualUpdateItemNumber,
    getTotalAmount,
  }
  return <cartContext.Provider value={data}>{children}</cartContext.Provider>
}

//data provider through the custom hooks
export const useCartContextProvider = () => {
  const contextData = useContext(cartContext)
  if (!contextData) {
    throw new Error('context must be used inside the provider')
  }
  return contextData
}
