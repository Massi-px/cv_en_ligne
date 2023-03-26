// lightTheme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FF4444',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

export default lightTheme;