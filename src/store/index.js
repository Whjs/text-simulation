import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import movieSlice from './features/movieSlice'
import userSlice from './features/userSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
    user: userSlice 
  }
})

export default store