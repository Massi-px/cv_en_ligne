import {AppBar, IconButton, Toolbar, Stack, Button, MenuItem, useTheme, useMediaQuery} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/img/Logo2.webp";
import React from "react";
import DrawerComp from "./DrawerComp.jsx";
import {styleAppBar, styleAppBarLight, styleIconLDmode, sxIconAppBar} from "../assets/style/StyleAppBar.js";
import {links1} from "./Tabs.jsx";
import {StyledMenu} from '../assets/style/StyleAppBar.js'
import {Brightness4, Brightness7} from "@mui/icons-material";

export default function MuiNavbar({links, toggleTheme}) {

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <AppBar position={'static'} style={isMatch ? styleAppBarLight : styleAppBar} theme={theme} >
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src={logo} className="App-logo" alt="logo" />
                </IconButton>

                {isMatch ?
                    <>
                        <DrawerComp links={links1} />
                    </> :
                    <Stack direction='row' spacing={2}>
                        {links.map((link, index) => (
                            <Button color='inherit' key={index}>{link}</Button>
                        ))}
                        <Button color='inherit'
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon/>}
                        >
                            Projets
                        </Button>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem component="a" href="https://www.etat-d-ame.fr/" target="_blank"
                                      rel="noopener noreferrer" onClick={handleClose}>
                                Site Alternance
                            </MenuItem>

                            <MenuItem onClick={handleClose} disableRipple>
                                Site BDE
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                Projet BTS
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                Snake
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                Sokoban
                            </MenuItem>
                        </StyledMenu>
                    </Stack>}
                <Stack direction='row' spacing={2} sx={sxIconAppBar}>
                    <div style={styleIconLDmode}>
                        <IconButton
                            onClick={toggleTheme} color="inherit">
                            {theme.palette.mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                        </IconButton>
                    </div>
                    <IconButton color='inherit' href='https://www.linkedin.com/in/pinna-massimiliano/' target='_blank'>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color='inherit' href='https://github.com/Massi-px' target='_blank'>
                        <GitHubIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

