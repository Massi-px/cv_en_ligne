import React, {useState, useEffect} from "react";
import './assets/css/App.css';
import Loader from './components/Loader.js';
import MuiNavbar from "./components/MuiNavbar";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {IconButton, Paper} from '@mui/material';
import {Brightness4, Brightness7} from '@mui/icons-material';

function App() {

    const [mode, setMode] = useState(false);
    const [loader, setLoader] = useState(true);

    const theme = createTheme({
        palette:{
            mode: mode ? "light" : "dark"
        },
        background:{
            default: '#282c34',
            paper: '#2c2c2e', // couleur de fond pour les composants de type "paper" en mode sombre
        }
    })

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
                <Paper className='App'>
                    <header className="App-header">
                        <MuiNavbar/>
                    </header>
                    <Paper className='App-body' sx={{height: '100vh', display: 'flex'}}>
                        <div style={{ marginLeft: 'auto' }}>
                            <IconButton onClick={()=>setMode(!mode)} color="inherit">
                                {theme.palette.mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                            </IconButton>
                        </div>
                    </Paper>
                </Paper>
            </ThemeProvider>
        );
}

export default App;
