import React, {useState, useEffect} from "react";
import './assets/css/App.css';
import Loader from './components/Loader.js';
import MuiNavbar from "./components/MuiNavbar";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Container, Grid, Paper} from '@mui/material';
import {links2} from "./components/Tabs.js";
import Box from '@mui/material/Box';
import {blue, pink} from "@mui/material/colors";

function App() {

    const [darkMode, setDarkMode] = useState(false);
    const [loader, setLoader] = useState(true);
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
    const [circleColor, setCircleColor] = useState('#ff6b6b');

    const theme = createTheme({
        palette: {
            box: {
                background: '#fff', // Couleur de fond claire par défaut
            },
            mode: darkMode ? 'dark' : 'light',
        },
    });

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

    const toggleTheme = () => {
        theme.palette.mode = theme.palette.mode === 'light' ? 'dark' : 'light';
        setDarkMode(theme.palette.mode === 'dark');
    };

    return loader ?(
            <Loader />
        )
        :
        (
            <ThemeProvider theme={theme}>
                <Box className='App' onMouseMove={handleMouseMove}>
                    <div
                        className="circle"
                        style={{ top: circlePosition.y, left: circlePosition.x, backgroundColor: circleColor }}
                        onClick={handleClick}
                    />
                    <header className="App-header">
                        <MuiNavbar links={links2} toggleTheme={toggleTheme}/>
                    </header>
                    <Box className='App-body'>

                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6}>
                                    <p>Test</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>Test</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>Test</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>Test</p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        );
}

export default App;
