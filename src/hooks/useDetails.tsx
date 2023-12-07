import { allData } from '../Data'
import { DataType } from '../types'

export default function useDetails() {
  const id = localStorage.getItem('id')
  const data: DataType = []
  allData.map((details) => {
    if (details.id === id) {
      data.push(details)
    }
  })

  return data[0]
}
