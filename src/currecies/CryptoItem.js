import { Box, Card, CardContent, CardHeader, Typography, Avatar, Button, CardActionArea, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCoinData } from '../redux/MarketSlice'
import millify from 'millify'
import { fetchCoinExchanges } from '../redux/ExchangeSlice'
import { grey } from '@mui/material/colors'

const CryptoItem = () => {

    const {uuid} = useParams()
    const dispatch = useDispatch()
    const crypto = useSelector((state) => state.market.coin)
    const exchanges = useSelector((state) => state.exchange.exchanges)

    const [showMore, setShowMore] = useState(6)

    useEffect(() => {
        dispatch(fetchCoinData(uuid))
        dispatch(fetchCoinExchanges({uuid, showMore}))
    },[showMore])

    console.log(crypto)
    console.log(exchanges)

    const expand = () => {
        if(showMore === 6){
            setShowMore(50)
        }
        else{
            setShowMore(6)
        }
    }

    console.log(crypto)

    const coinData = crypto.map((coin) => {
        return <Box>
            <Card style={{backgroundColor: "#5c5c5c", color: 'whitesmoke', padding: 10}}>
                <CardHeader title={coin.data.coin.name} avatar={<Avatar src={coin.data.coin.iconUrl}></Avatar>} />
                <CardContent>
                    <Typography>Symbol: <Typography style={{color: coin.data.coin.color}}>{coin.data.coin.symbol}</Typography></Typography>
                    <Typography>Price: <Typography style={{color: coin.data.coin.color}}>{millify(coin.data.coin.price)}</Typography></Typography>
                    <Typography>change: <Typography style={{color: coin.data.coin.color}}>{millify(coin.data.coin.change)}%</Typography></Typography>
                    <Typography>High: <Typography style={{color: coin.data.coin.color}}>{millify(coin.data.coin.allTimeHigh.price)}</Typography></Typography>
                    <Typography>Exchanges: <Typography style={{color: coin.data.coin.color}}>{coin.data.coin.numberOfExchanges}</Typography></Typography>
                    <Button>More Info</Button>
                </CardContent>
            </Card>
        </Box>
    })

    const coinExchange = exchanges.map((market) => {
        return <Grid item xs={3} style={{margin: 10}}>
            <Card style={{backgroundColor: "#5c5c5c", color: 'whitesmoke', padding: 10}}>
                <CardActionArea href={market.coinrankingUrl} target="_blank" rel='noopener noreferrer'>
                <CardHeader  title={market.name} avatar={<Avatar src={market.iconUrl}></Avatar>}/>
                <CardContent>
                    <Typography>Price: {millify(market.price)}</Typography>
                    <Typography>24h Volume: {market[0]} </Typography>
                    <Typography>Price: {}</Typography>
                    <Typography>Price: </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    })
  return (
    <div style={{marginTop: 80}}>
        {coinData}
        <Box style={{marginTop: 50}}>
        <Typography variant='h4' style={{color: 'whitesmoke'}}>Exchanges: </Typography>
        <Grid container>
        {coinExchange}
        </Grid>
        <Button onClick={expand}>Show More</Button>
        </Box>
    </div>
  )
}

export default CryptoItem