import { configureStore } from "@reduxjs/toolkit";
import cardnoteReducer from './cardSlice'
export default configureStore({
    reducer:{
        cardnote:cardnoteReducer
    }
})