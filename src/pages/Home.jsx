import React, {useEffect, useState} from "react"
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Loader from "../components/Loader";
import Box from "@mui/material/Box";
import MuiNavbar from "../components/MuiNavbar";
import {links2} from "../components/Tabs";
import {Grid, Typography} from "@mui/material";
import massi from "../assets/img/massimiliano_pinna.jpg";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [loader, setLoader] = useState(true);
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)' : '#FF4444',
                backgroundImage: darkMode ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)' : 'none',// Couleur de fond sombre ou claire par défaut
            },
            text: {
                primary: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)', // Couleur du texte pour le mode sombre ou clair
            },
        },
    });

    const handleMouseMove = (event) => {
        setCirclePosition({ x: event.clientX, y: event.clientY });
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
                <div className={`Home ${darkMode ? '' : 'light'}`} onMouseMove={handleMouseMove}>
                    <Box
                        className="circle"
                        style={{ top: circlePosition.y, left: circlePosition.x }}
                    />
                    <Box className="Home-header">
                        <MuiNavbar links={links2} toggleTheme={toggleTheme}/>
                    </Box>
                    <Box className='Home-body'>
                        <Grid container className='identity'>
                            <Grid item xs={8}>
                                <Typography>Massimiliano Pinna</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={massi} className='massiPhoto' alt="massimiliano_pinna" />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </ThemeProvider>
        );
}