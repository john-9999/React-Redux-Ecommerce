import { configureStore } from '@reduxjs/toolkit'
//reducers
import userReducer from '../reducers/user/userSlice';
import cartReducer from '../reducers/cart/cartSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
    cart: cartReducer
  },
})