import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c031e95be0msh3d15e454f05c4aap165355jsn168a1ce49640',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    



export const fetchCoinExchanges = createAsyncThunk('exchange/fetchCoinExchanges', ({uuid, showMore}) => {
   return fetch(`https://coinranking1.p.rapidapi.com/coin/${uuid}/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=${showMore}&offset=0&orderBy=24hVolume&orderDirection=desc`, options)
	.then(response => response.json())
	.then((data) => data)
	.catch(err => console.error(err));
})

export const fetchAllExchanges = createAsyncThunk('exchanges/fetchAllExchanges', () => {
    return fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc', options)
	.then(response => response.json())
	.then((data) => data)
	.catch(err => console.error(err));
})

const initialState = {
    exchanges: [],
    allexchanges: []
}


const exchangeSlice = createSlice({
    name: 'trade',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchCoinExchanges.fulfilled, (state, action) => {
            state.exchanges = action.payload.data.exchanges
        })
        .addCase(fetchAllExchanges.fulfilled, (state, action) => {
            console.log(action.payload)
            state.allexchanges = action.payload.data.exchanges
        })
           
    }
})

export default exchangeSlice.reducer

