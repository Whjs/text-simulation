import { createSlice } from '@reduxjs/toolkit'

export const marketSlice = createSlice({
  name: 'market',
  initialState: {
    marketEnum: {
      rice: { // 大米
        name: '大米',
        price: 2.6,
        unit: '斤'
      }
    }
  }
})

export default marketSlice.reducer
