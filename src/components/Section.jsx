import React from "react";
import { Box, Typography } from "@mui/material";
import "../assets/css/Section.scss";
import {SectionStyle, SectionText, SectionTitle} from "../assets/style/StyleSection";
function Section({ title, children }) {
    return (
        <Box sx = {SectionStyle}>
            <Typography variant="h3" gutterBottom sx={SectionTitle}>
                {title}
            </Typography>
            <Box sx = {SectionText}>
                <Typography>{children}</Typography>
            </Box>
        </Box>
    );
}
export default Section;
