import React, {useState} from 'react'
import {Drawer, IconButton} from '@mui/material'
import {MenuRounded} from "@mui/icons-material";
export default function DrawerComp () {
    const [open, setOpen] = useState(false)
    return(
        <>
        <Drawer open={true} onClose={()=> setOpen(false)}>

        </Drawer>
        <IconButton>

        </IconButton>
        </>
    )
}