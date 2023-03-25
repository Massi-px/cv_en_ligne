import React, {useState, useEffect} from "react";
import './assets/css/App.css';
import Loader from './components/Loader.js';
import MuiNavbar from "./components/MuiNavbar";
import { ThemeProvider } from '@mui/material/styles';
import lightTheme from './components/Lightmode.js';
import darkTheme from './components/Darkmode.js';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
function App() {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true)
        setTimeout(()=> {
            setLoader(false);
        },3000)
    }, [])

    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme.palette.mode === 'light' ? darkTheme : lightTheme);
    };

    return loader ?(
            <Loader />
        )
        :
        (
            <ThemeProvider theme={theme} className={theme.palette.mode}>
                <div className="App">
                    <header className="App-header">
                        <MuiNavbar/>
                    </header>

                    <body className="App-body">
                    <IconButton onClick={toggleTheme} color="inherit">
                        {theme.palette.mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                    </IconButton>
                    </body>

                </div>
            </ThemeProvider>
        );
}

export default App;
