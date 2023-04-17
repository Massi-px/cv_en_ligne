import React, {useState} from 'react'
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, useTheme,
} from '@mui/material'
import {MenuRounded} from "@mui/icons-material";
import {styleIconMenuDrawer} from "../assets/style/Style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//Menu Hamburger
export default function DrawerComp ({links}) {
    const [open, setOpen] = useState(false)

    const theme = useTheme();

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
                    <ListItemButton>
                        <ListItemIcon>

                        </ListItemIcon>

                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton target="_blank" rel="noopener noreferrer">
                        <ListItemIcon>
                            <KeyboardArrowDownIcon />
                            <ListItemText>
                                Projets
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>

            </Drawer>
            <IconButton onClick={()=>setOpen(!open)} style={styleIconMenuDrawer}>
                <MenuRounded/>
            </IconButton>
        </>
    )
}