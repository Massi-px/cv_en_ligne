import React, {useState} from 'react'
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {MenuRounded} from "@mui/icons-material";
import {styleIconMenuDrawer} from "../assets/style/Style";

//Menu Hamburger
export default function DrawerComp ({links}) {
    const [open, setOpen] = useState(false)
    return(
        <>
            <Drawer open={open} onClose={()=> setOpen(false)}>
                <List>
                    {links.map((link, index) => (
                        <ListItemButton key={index} component="a" href={link.url} target="_blank" rel="noopener noreferrer">
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton onClick={()=>setOpen(!open)} style={styleIconMenuDrawer}>
                <MenuRounded/>
            </IconButton>
        </>
    )
}