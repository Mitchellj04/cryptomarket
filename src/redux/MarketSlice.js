import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'c031e95be0msh3d15e454f05c4aap165355jsn168a1ce49640',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };    
const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c031e95be0msh3d15e454f05c4aap165355jsn168a1ce49640',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    

export const fetchMarketData = createAsyncThunk('market/fetchMarketData', () => {
    return fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then((data) => data)
	.catch(err => console.error(err));
})

export const fetchAllData = createAsyncThunk('market/fetchAllData', () => {

})

const initialState = {
    data: [],
    coins: [],
    newest: [],
    status: []
}


const marketSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchMarketData.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchMarketData.fulfilled, (state, action) => {
                console.log(action.payload)
                state.data = action.payload.data.stats
                state.status = action.payload.status
                state.coins = action.payload.data.coins
                // state.newest = action.payload.data.newestCoins
            })
    }
})

export default marketSlice.reducer