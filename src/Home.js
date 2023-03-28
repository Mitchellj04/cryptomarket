import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import NavBar from './NavBar'

const Home = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c031e95be0msh3d15e454f05c4aap165355jsn168a1ce49640',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    useEffect(() => {
           fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    })
  return (
    <>
    <Grid container> 
    <Typography variant='h4'>Crypto Stats</Typography>
       <Grid item xs={8}>

           


       </Grid>
    </Grid>

    </>
  )
}

export default Home