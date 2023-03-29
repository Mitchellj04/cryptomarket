import { AppBar, Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'
import { fetchMarketData } from './redux/MarketSlice'
import millify from 'millify'

const Home = () => {

    // REDUX STATE
    const dispatch = useDispatch()
    const marketData = useSelector((state) => state.market.data)
    const allCoins = useSelector((state) => state.market.coins)
   
    const topTen = allCoins.slice(0, 10)

    console.log(marketData)
    console.log(topTen)

    const showTop = topTen.map((coin) => {
        return <>
        <Grid item xs={3} style={{margin: 20}}>
            <Card hoverable>
                <Typography>{coin.rank}.</Typography>
                <CardHeader title={coin.name} avatar={<Avatar src={coin.iconUrl}></Avatar>}/>
                <CardContent>
                    <Typography>Symbol: {coin.symbol}</Typography>
                    <Typography>Price: ${millify(coin.price)}</Typography>
                    <Typography>Change: {millify(coin.change)}%</Typography>
                </CardContent>
            </Card>
            </Grid>
        </>
    })
    useEffect(() => {
        dispatch(fetchMarketData())
    }, [])

    return (
        <>
            <Typography variant='h4'>Crypto Stats</Typography>
            <Grid container>
                <Grid item xs={4}>Total Currencies: {millify(marketData.totalCoins)}</Grid>
                <Grid item xs={4}>Total Exchanges: {millify(marketData.totalExchanges)}</Grid>
                <Grid item xs={4}>Total Market Cap: {millify(marketData.totalMarketCap)}</Grid>
                <Grid item xs={4}>Total 24h Volume: {millify(marketData.total24hVolume)}</Grid>
                <Grid item xs={4}>Total Markets {millify(marketData.totalMarkets)}</Grid>
            </Grid>
            <Box>
                <Typography variant='h4'>Leading Currencies</Typography>
                <Grid container>
                {showTop}
                </Grid>
            </Box>
        </>
    )
}

export default Home