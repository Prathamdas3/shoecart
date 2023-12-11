import { BigCardData } from '../db/Data'
import { DataType } from '../types'

export default function useSort(option: number): DataType {
  const dataSet: DataType = BigCardData
  let sortData: DataType = []
  switch (option) {
    case 0:
      sortData = dataSet
      break
    case 1:
      sortData = dataSet.sort((a, b) => a.price - b.price)
      break
    case 2:
      sortData = dataSet.sort((a, b) => b.price - a.price)
      break
    default:
      sortData = dataSet
  }

  return sortData
}
