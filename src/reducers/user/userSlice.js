import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email:"",
  username:"",
  id:"",
}

export const userSlice = createSlice({
  name: 'user',
  initialState:initialState,
  reducers: {
//action: Solo me interesa si viene información (si viene un payload)
    setUser:(state,action)=>{
      state.email = action.payload.email,
      state.username = action.payload.username,
      state.id = action.payload.id
    },
//action: No me interesa ya que voy a hacer un logout (cerrando sesion), lo seteo a vacio.
    unsetUser:(state)=>{
      state.email = "",
      state.username = "",
      state.id = ""
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer