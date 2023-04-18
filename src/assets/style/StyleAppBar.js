//Style de la barre de naviguation
import {alpha, Menu, styled} from "@mui/material";
import React from "react";

export const styleAppBar = {
    borderRadius: 15,
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(251,141,103,1) 100%)',
    position: 'static',
}

//Style des icones dans la barre de navigations
export const sxIconAppBar = {
    marginLeft:'auto'
}

//syle de l'icone Menu du Drawer Naviguateur
export const styleIconMenuDrawer = {
    color: '#FFFFFF'
}


//Style de l'icône pour change le thème LD = Light Dark pour les 2 thèmes différents.
export const styleIconLDmode = {
    marginLeft:'auto'
}
/*
export const sxBgIconLDmode = {
    p: 2,
    border: '1px dashed grey',
    borderRadius:'30px',
    height: '10px',

}*/

export const StyledMenu = styled((props) => (
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
        borderRadius: 10,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgb(2,0,36)' : '#FFFFFF',
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