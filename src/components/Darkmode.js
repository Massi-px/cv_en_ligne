// darkTheme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#f48fb1',
        },
        background: {
            default: '#282c34', // couleur de fond par défaut en mode sombre
            paper: '#282c34', // couleur de fond pour les composants de type "paper" en mode sombre
        },
    },
});

export default darkTheme;