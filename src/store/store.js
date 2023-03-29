import { configureStore } from "@reduxjs/toolkit";
import MarketSlice from "../redux/MarketSlice";



const store = configureStore({
    reducer:{
        market: MarketSlice
    }
})


export default store 