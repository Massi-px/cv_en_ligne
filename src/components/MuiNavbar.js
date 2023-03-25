import {AppBar, IconButton, Toolbar, Typography, Stack, Button, MenuItem, alpha, styled, Menu} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/img/logo.png";
import React from "react";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));
export default function MuiNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <AppBar position={'static'} style={{borderRadius: 15, background:'#E85523'}} >
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src={logo} className="App-logo" alt="logo" />
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}} style={{marginLeft: 2}}>
                    MASSIMILIANO PINNA
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Accueil</Button>
                    <Button color='inherit'>Compétences</Button>
                    <Button color='inherit'>Expériences</Button>
                    <Button color='inherit'
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
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
                        <MenuItem onClick={handleClose} disableRipple>
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
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
