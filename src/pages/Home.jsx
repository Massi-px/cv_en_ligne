import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Loader from "../components/Loader";
import Box from "@mui/material/Box";
import MuiNavbar from "../components/MuiNavbar";
import {links2} from "../components/Tabs";
import {Grid, Typography} from "@mui/material";
import massi from "../assets/img/massimiliano_pinna-removebg.webp";
import Section from '../components/Section';
import ProgressBarDate from "../components/ProgressBarDate";

export default function Home() {

    const [darkMode, setDarkMode] = useState(true);
    const [loader, setLoader] = useState(true);

    const START_DATE = new Date('2022-09-01');
    const DEADLINE = new Date('2023-06-31');

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
        typography: {
            fontFamily: 'SF-Pro-Text-Light, sans-serif',
            // Ajouter d'autres styles de typographie ici
        },
    });

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

                        <Section title="Parcours" className="Parcours">
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.9rem',md:'1rem'}}}>
                                Je suis actuellement étudiant en formation pour devenir développeur web chez SUPDEWEB.
                            </Typography>

                            <Typography>
                                Ma passion pour l'informatique est née au collège,
                                où j'ai commencé à explorer les divers aspects de ce domaine.
                            </Typography>

                            <Typography>
                                J'ai poursuivi mes études en obtenant un BAC PRO SN OPTIONS RISC,
                            </Typography>

                            <Typography>
                                au cours duquel j'ai acquis des compétences en électronique,
                            </Typography>

                            <Typography>
                                en système embarqué, en réseaux, en dépannage et en montage de postes de travail.
                            </Typography>

                            <Typography>
                                J'ai effectué cinq stages d'une durée d'un mois pendant cette formation,
                            </Typography>

                            <Typography>
                                qui m'ont permis de découvrir mes premières expériences professionnelles.
                            </Typography>

                            <Typography>
                                J'ai ensuite poursuivi ma formation en obtenant un BTS SN option IR ,
                            </Typography>

                            <Typography>
                                au cours duquel j'ai effectué un stage de cinq semaines.
                            </Typography>

                            <ProgressBarDate startDate={START_DATE} deadline={DEADLINE}/>

                        </Section>
                        <Section title="Compétences">
                            <Typography>
                                HTML / CSS / JavaScript / React / React Native / Node.js / MariaDB / SQL / PHP
                            </Typography>
                        </Section>
                        <Section title="Projets">
                            <Typography>
                                Retrouvez mes projets sur mon portfolio : <a href="https://massimilianopinna.fr/">massimilianopinna.fr</a>
                            </Typography>
                        </Section>
                        <Section title="Contact">
                            <Typography>
                                Envoyez-moi un email à l'adresse suivante : <a href="mailto:massimiliano.pinna@gmail.com">massimiliano.pinna@gmail.com</a>
                            </Typography>
                        </Section>
                    </Box>

                </div>
            </ThemeProvider>
        );
}