import { createSlice } from '@reduxjs/toolkit'
//redux toolkit is using a library called immutable.js which allows us to mutate the state directly
const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const item = state.products.find((product)=> product.id === action.payload.id);
        if(item){
            item.quantity+=action.payload.quantity;
        }
        else{
            state.products.push(action.payload);
        }
    },
    removeItem: (state,action) => {
      state.products = state.products.filter((product)=> product.id !== action.payload);//remove the item which is equal to the payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions

export default cartSlice.reducer