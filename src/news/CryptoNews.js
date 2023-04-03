import { Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentNews } from '../redux/NewsSlice'

const CryptoNews = () => {

    const dispatch = useDispatch()
    const news = useSelector((state) => state.media.news)

    useEffect(() => {
        dispatch(fetchCurrentNews())
    }, [])

    const newsList = news.map((data) => {
        return <Grid item xs={5} style={{margin: 10}}>
            <Card style={{backgroundColor: "#5c5c5c", color: 'whitesmoke', padding: 10}}>
                <CardActionArea href={data.url} target="_blank" rel='noopener noreferrer'>
                <CardHeader title={data.title}/>
                <CardContent>
                    <Typography>{data.description}</Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    })

  return (
    <div>
        <Typography variant="h4">Latest News</Typography>
        <Grid container>
        {newsList}
        </Grid>
    </div>
  )
}

export default CryptoNews