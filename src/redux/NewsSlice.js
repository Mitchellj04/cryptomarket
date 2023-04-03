import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c031e95be0msh3d15e454f05c4aap165355jsn168a1ce49640',
		'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
	}
};
    



export const fetchCurrentNews = createAsyncThunk('news/fetchCurrentNews', () => {
   return fetch('https://crypto-news16.p.rapidapi.com/news/top/5', options)
   .then(response => response.json())
   .then((data) => data)
   .catch(err => console.error(err));
})



const initialState = {
   news: []
}


const newsSlice = createSlice({
    name: 'trade',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchCurrentNews.fulfilled, (state, action) => {
            state.news = action.payload
        })
           
    }
})

export default newsSlice.reducer

