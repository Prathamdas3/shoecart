import { useState, createContext, useContext } from 'react'
import { childT, CategoryType } from '../types'
import useSort from '../hooks/useSort'

//context creation
const apiContext = createContext<CategoryType | null>(null)

//context provider
export const ContextProvider = ({ children }: childT) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState<boolean>(false)
  const [option, setOption] = useState<number>(0)

  const sortData = useSort(option)

  const data = {
    isCategoryMenuOpen,
    setIsCategoryMenuOpen,
    setOption,
    sortData,
    option,
  }
  return <apiContext.Provider value={data}>{children}</apiContext.Provider>
}

//context provider through custom hooks
export const useCategoryContextProvider = () => {
  const contextData = useContext(apiContext)
  if (!contextData) {
    throw new Error('context must be used inside the provider')
  }
  return contextData
}
