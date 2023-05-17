import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalCount:0,
  productsList:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState:initialState,
  reducers: {
    //Se recibe lo que hay en el estado (lista de productos) y se agrega un nuevo objeto que viene como nueva información (el payload)
    //Al totalCount que se encuentra en el estado, se le agrega y suma 1 producto más.
    addProductToCart: (state, action)=>{
        state.productsList = [...state.productsList , action.payload]
        state.totalCount += 1 ;
    },
    RemoveProductFromCart: (state, action)=>{
      const productId = action.payload;
      state.totalCount -= 1 ;
      state.productsList = state.productsList.filter(product => product.id !== productId)
  }
  },
  
})

// Action creators are generated for each case reducer function
export const { addProductToCart, RemoveProductFromCart } = cartSlice.actions

export default cartSlice.reducer

