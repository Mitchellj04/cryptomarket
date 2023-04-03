import React, { useState } from 'react'
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import millify from 'millify'
import { useNavigate } from 'react-router-dom'

const CrptoList = () => {

    const navigate = useNavigate()
const [length, setLength] = useState(3)
    const allCoins = useSelector((state) => state.market.coins)
    const topTen = allCoins.slice(0, length)

    

    console.log(topTen)

    const showTop = topTen.map((coin) => {
        return <>
            <Grid item xs={3} style={{ margin: 20 }}>
                <Card hoverable={true} style={{backgroundColor: "#5c5c5c", color: 'whitesmoke', padding: 10}}>
                    <CardActionArea onClick={() => navigate(`/crypto-details/${coin.uuid}`)}>
                        <Typography>{coin.rank}.</Typography>
                        <CardHeader title={coin.name} avatar={<Avatar src={coin.iconUrl}></Avatar>} />
                        <CardContent>
                            <Typography>Symbol: {coin.symbol}</Typography>
                            <Typography>Price: ${millify(coin.price)}</Typography>
                            <Typography>Change: {millify(coin.change)}%</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Grid>
        </>
    })

    const showMore = () => {
        if (length === 3) {
            setLength(10)
        }
        else {
            setLength(3)
        }
    }


    return (
        <Box style={{marginTop: 40}}>
            <Typography variant='h4' style={{color: 'whitesmoke'}}>Leading Currencies</Typography>
            <Grid container style={{margin: 20}}>
                {showTop}
            </Grid>
            <Button onClick={showMore}>See more</Button>
        </Box>
    )
}

export default CrptoList