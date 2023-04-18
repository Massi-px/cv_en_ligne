import React from "react";
import {Grid, Typography} from "@mui/material";

function Section ({title, children}) {
    return (
        <Grid container className={title.toLowerCase()}>
            <Grid item xs={12} className={`${title.toLowerCase()}-column`}>
                <Typography variant="h3" gutterBottom>
                    {title}
                </Typography>
                <Typography>{children}</Typography>
            </Grid>
        </Grid>
    );
};

export default Section;