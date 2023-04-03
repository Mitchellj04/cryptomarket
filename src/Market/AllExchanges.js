import { Avatar, Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllExchanges } from '../redux/ExchangeSlice'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import millify from 'millify'

const AllExchanges = () => {

  const dispatch = useDispatch()

  const exchanges = useSelector((state) => state.exchange.allexchanges)

  console.log(exchanges)

  useEffect(() => {
    dispatch(fetchAllExchanges())
  }, [])

  const displayExchange = exchanges.map((exchange) => {
    const recommend = () => {
      if(exchange.recommended === true){
        return <CheckCircleIcon />
      }
      else {
        return <DangerousIcon />
      }
    }
    return <Grid item xs={3} style={{margin: 10}}>
      <Card hoverable={true} style={{backgroundColor: "#5c5c5c", color: 'whitesmoke', padding: 10}}>
        <CardActionArea href={exchange.coinrankingUrl} target="_blank" rel='noopener noreferrer'>
          <CardHeader title={exchange.name} avatar={<Avatar src={exchange.iconUrl}/>}/>  
          <CardContent>
          <Typography>BTC Price: {millify(exchange.price)}</Typography>
                    <Typography>24h Volume: {millify(exchange[Object.keys(exchange)[9]])} </Typography>
                    <Typography>Markets: {exchange.numberOfMarkets}</Typography>
                    <Typography>Recommended: {recommend} </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  })

  return (
    <div style={{marginTop: 80}}>
      <Grid container style={{}}>
        {displayExchange}
      </Grid>
    </div>
  )
}

export default AllExchanges