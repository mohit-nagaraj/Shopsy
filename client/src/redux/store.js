import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

export const store = configureStore({
    reducer: {cart:cartReducer},
    //now reach products array everywhere in our application
})