import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import movieSlice from './features/movieSlice'
import userSlice from './features/userSlice'
import bankSlice from './features/bankSlice'
import marketSlice from './features/marketSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
    user: userSlice,
    bank: bankSlice,
    market: marketSlice
  }
})

export default store