import { configureStore } from "@reduxjs/toolkit";
import ExchangeSlice from "../redux/ExchangeSlice";
import MarketSlice from "../redux/MarketSlice";
import NewsSlice from "../redux/NewsSlice";



const store = configureStore({
    reducer:{
        market: MarketSlice,
        exchange: ExchangeSlice,
        media: NewsSlice
    }
})


export default store 