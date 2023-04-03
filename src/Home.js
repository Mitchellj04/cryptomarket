import { AppBar, Avatar, Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'
import { fetchMarketData } from './redux/MarketSlice'
import millify from 'millify'
import CrptoList from './currecies/CrptoList'
import CryptoNews from './news/CryptoNews'

const Home = () => {

    // REDUX STATE
    const dispatch = useDispatch()
    const marketData = useSelector((state) => state.market.data)
    
       
    useEffect(() => {
        dispatch(fetchMarketData())
    }, [])

   

    console.log(marketData)
 

  
    return (
        <>
        <div style={{marginTop: 80}}>
            <Typography variant='h4' >Crypto Stats</Typography>
            <Grid container style={{color: 'whitesmoke', marginTop: 20}}>
                <Grid item xs={4}><Typography variant='h5'>Total Currencies: </Typography><Typography style={{color: 'orange'}}>{millify(marketData.totalCoins)}</Typography></Grid>
                <Grid item xs={4}><Typography variant='h5'>Total Exchanges: </Typography><Typography style={{color: 'orange'}}>{millify(marketData.totalExchanges)}</Typography></Grid>
                <Grid item xs={4}><Typography variant='h5'>Total Market Cap: </Typography><Typography style={{color: 'orange'}}>{millify(marketData.totalMarketCap)}</Typography></Grid>
                <Grid item xs={4}><Typography variant='h5'>Total 24h Volume: </Typography><Typography style={{color: 'orange'}}>{millify(marketData.total24hVolume)}</Typography></Grid>
                <Grid item xs={4}><Typography variant='h5'>Total Markets: </Typography><Typography style={{color: 'orange'}}>{millify(marketData.totalMarkets)}</Typography></Grid>
            </Grid>
            <CrptoList />
            <CryptoNews />
            </div>
        </>
    )
}

export default Home