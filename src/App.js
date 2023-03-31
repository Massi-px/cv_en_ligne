import React, {useState, useEffect} from "react";
import './assets/css/App.css';
import Loader from './components/Loader.js';
import MuiNavbar from "./components/MuiNavbar";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {IconButton, Paper} from '@mui/material';
import {Brightness4, Brightness7} from '@mui/icons-material';
import {styleIconLDmode, sxBgIconLDmode} from "./assets/style/Style";
import {links2} from "./components/Tabs.js";
import Box from '@mui/material/Box';

function App() {

    const [mode, setMode] = useState(false);
    const [loader, setLoader] = useState(true);
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
    const [circleColor, setCircleColor] = useState('#ff6b6b');

    const theme = createTheme({
        palette:{
            mode: mode ? "light" : "dark"
        },
        background:{
            default: '#282c34',
            paper: '#2c2c2e', // couleur de fond pour les composants de type "paper" en mode sombre
        }
    })

    const handleMouseMove = (event) => {
        setCirclePosition({ x: event.clientX, y: event.clientY });
    };

    const handleClick = () => {
        setCircleColor('#66b3ff');
        console.log('test click')
    };

    useEffect(() => {
        setLoader(true)
        setTimeout(()=> {
            setLoader(false);
        },3000)
    }, [])

    return loader ?(
            <Loader />
        )
        :
        (
            <ThemeProvider theme={theme}>
                <Paper className='App' onMouseMove={handleMouseMove}>
                    <div
                        className="circle"
                        style={{ top: circlePosition.y, left: circlePosition.x, backgroundColor: circleColor }}
                        onClick={handleClick}
                    />
                    <header className="App-header">
                        <MuiNavbar links={links2}/>
                    </header>
                    <Paper className='App-body'>
                        <div style={styleIconLDmode}>
                            <Box sx={sxBgIconLDmode}>
                                <IconButton
                                    onClick={()=>setMode(!mode)} color="inherit">
                                    {theme.palette.mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                                </IconButton>
                            </Box>
                        </div>
                    </Paper>
                </Paper>
            </ThemeProvider>
        );
}

export default App;
