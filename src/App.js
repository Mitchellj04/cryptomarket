import React from 'react'
import { Routes, Route} from "react-router-dom";
import CryptoItem from './currecies/CryptoItem';
import WatchList from './currecies/WatchList';
import Home from './Home';
import NavBar from './NavBar';
import './App.css'
import AllCrypto from './currecies/AllCrypto';
import { createTheme, ThemeProvider, colors } from '@mui/material';
import { typography } from '@mui/system';
import AllExchanges from './Market/AllExchanges';

const theme = createTheme({
    text: {
        primary: 'red'
    },
    typography: {
        h4: {
            color: 'whitesmoke'
        },
        h2: {
            color: 'whitesmoke'
        }
    },
    listItem: {
        icon: {
            color: 'whitesmoke'
        }
    },
    grid: {
        item: {
            margin: 10
        }
    }
})

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <div style={{backgroundColor: '#0c0929'}}>
        <NavBar />
        </div>
        <div style={{marginLeft: 200}}>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/crypto-details/:uuid' element={<CryptoItem />} />
            <Route path='/watchlist' element={<WatchList />} />
            <Route path='/cryptos' element={<AllCrypto />}/>
            <Route path='/exchanges' element={<AllExchanges />}/>
        </Routes>
        </div>
    </ThemeProvider>
    </>
  )
}

export default App