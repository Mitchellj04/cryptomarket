import { Avatar, Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import millify from 'millify'
import '../App.css'
import { fetchMarketData } from '../redux/MarketSlice'
import { useNavigate } from 'react-router-dom'

const AllCrypto = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cryptos = useSelector((state) => state.market.coins)

    useEffect(() => {
        dispatch(fetchMarketData())
    },[])


    const displayCryptos = cryptos.map((coin) => {
        return <Grid key={coin.uuid} item xs={3} style={{margin: 10}}>
            <Card hoverable={true} style={{backgroundColor: "#5c5c5c", color: 'whitesmoke', padding: 10}}>
                <CardActionArea onClick={() => navigate(`/crypto-details/${coin.uuid}`)}>
                <Typography>{coin.rank}.</Typography>
                    <CardHeader title={coin.name} avatar={<Avatar src={coin.iconUrl} />}/>
                    <CardContent>
                    <Typography>Symbol: {coin.symbol}</Typography>
                            <Typography>Price: ${millify(coin.price)}</Typography>
                            <Typography>Change: {millify(coin.change)}%</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    })
  return (
    <div className='All-Cryptos'>
        <Grid container>
        {displayCryptos}
        </Grid>
    </div>
  )
}

export default AllCrypto