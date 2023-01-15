import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    borrowList: [
      {
        name: '3个月借款',
        time: 90,
        rate: 3,
        max: 1000000,
      },
      {
        name: '半年借款',
        time: 180,
        rate: 3.2,
        max: 1000000,
      },
      {
        name: '一年借款',
        time: 360,
        rate: 3.5,
        max: 1000000,
      },
      {
        name: '三年借款',
        time: 360 * 3,
        rate: 3.75,
        max: 5000000,
      },
      {
        name: '五年借款',
        time: 360 * 3,
        rate: 4.2,
        max: 5000000,
      },
      {
        name: '五年以上借款',
        time: 360 * 30,
        rate: 5,
        max: 'max',
      }
    ]
  }
})

export default bankSlice.reducer
