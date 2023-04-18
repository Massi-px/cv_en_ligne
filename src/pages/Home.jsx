import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Loader from "../components/Loader";
import Box from "@mui/material/Box";
import MuiNavbar from "../components/MuiNavbar";
import {links2} from "../components/Tabs";
import {CircularProgress, Grid, Typography} from "@mui/material";
import massi from "../assets/img/massimiliano_pinna-removebg.webp";
import Section from '../components/Section';

export default function Home() {

    const [progress, setProgress] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    const [loader, setLoader] = useState(true);

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


    useEffect(() => {
        setLoader(true)
        setTimeout(()=> {
            setLoader(false);
        },3000)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

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
                <div className={`Home ${darkMode ? '' : 'light'}`}>
                    <Box className="Home-header">
                        <MuiNavbar links={links2} toggleTheme={toggleTheme}/>
                    </Box>
                    <Box className='Home-body'>
                        <Grid container className='identity'>
                            <Grid item xs={8} className='identity-colomn-title'>
                                <Typography variant='h1' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>Massimiliano Pinna</Typography>
                                <Typography sx={{marginTop:'5px'}}>Développeur junior web / mobile</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={massi} className='massiPhoto' alt="massimiliano_pinna" />
                            </Grid>
                        </Grid>

                        <Section title="Mon parcours">
                            <Typography>
                                Je suis actuellement étudiant en formation pour devenir développeur web/mobile chez SUPDEWEB.
                            </Typography>

                            <Typography>
                                Ma passion pour l'informatique est née au collège, où j'ai commencé à explorer les différents aspects de ce domaine.
                            </Typography>

                            <Typography>
                                J'ai poursuivi mes études en obtenant un BAC PRO SN (Systèmes Numériques) OPTIONS RISC (Réseaux Informatique et Systèmes Communiquants),
                            </Typography>

                            <Typography>
                                au cours duquel j'ai acquis des compétences en électronique, en système embarqué, en réseaux, en dépannage et en montage de postes de travail.
                            </Typography>

                            <Typography>
                                J'ai effectué cinq stages d'une durée d'un mois pendant cette formation, qui m'ont permis de découvrir mes premières expériences professionnelles.
                            </Typography>

                            <Typography>
                                J'ai ensuite poursuivi ma formation en obtenant un BTS SN option IR (Systeme Numériques Informatique et réseaux),
                            </Typography>

                            <Typography>
                                au cours duquel j'ai effectué un stage de cinq semaines.
                            </Typography>
                            <CircularProgress variant="determinate" value={progress} className="progress" />
                        </Section>
                        <Section title="Skills">
                            <Typography>
                                HTML / CSS / JavaScript / React / React Native / Node.js / MariaDB / SQL
                            </Typography>
                        </Section>
                        <Section title="Projets">
                            <Typography>
                                Retrouvez mes projets sur mon portfolio : <a href="https://massimilianopinna.fr/">massimilianopinna.fr</a>
                            </Typography>
                        </Section>
                        <Grid container className="contact">
                            <Grid item xs={12} className="contact-colomn">
                                <Typography variant="h3" gutterBottom>
                                    Contact
                                </Typography>
                                <Typography>
                                    Envoyez-moi un email à l'adresse suivante : <a href="mailto:massimiliano.pinna@gmail.com">massimiliano.pinna@gmail.com</a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                </div>
            </ThemeProvider>
        );
}