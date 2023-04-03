import React from 'react'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { AppBar, makeStyles } from '@mui/material';

    
const NavBar = () => {
   

    const navigate = useNavigate()



    const drawer = (
            <List  style={{marginTop: 40}}>
                <ListItem key={'home'} disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemIcon style={{color: 'whitesmoke'}}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'currencies'} disablePadding>
                    <ListItemButton onClick={() => navigate('/cryptos')}>
                        <ListItemIcon style={{color: 'whitesmoke'}}>
                            <CurrencyBitcoinIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Currencies'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'markets'} disablePadding>
                    <ListItemButton onClick={() => navigate('/exchanges')}>
                        <ListItemIcon style={{color: 'whitesmoke'}}>
                            <CurrencyExchangeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Exchange'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'watchlist'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon style={{color: 'whitesmoke'}}>
                            <BookmarkIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Watchlist'} />
                    </ListItemButton>
                </ListItem>
            </List>
    );

    return (
            <AppBar style={{backgroundColor: '#22133d'}}>
            <Toolbar style={{backgroundColor: '#22133d'}}>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: "center" }}>CrypoNite</Typography>
                <Drawer
                    variant="permanent"
                    open
                   
                    PaperProps={{
                        sx: {
                        marginTop: 5,
                          backgroundColor: '#22133d',
                          color: 'whitesmoke'
                        }}}
                    >
                    {drawer}
                </Drawer>
            </Toolbar>
            </AppBar>
    )
}

export default NavBar