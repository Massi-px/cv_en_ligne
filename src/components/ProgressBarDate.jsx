import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';
import React, { useState, useEffect } from 'react'

export default function ProgressBarDate({ startDate, deadline }) {
    const [progress, setProgress] = useState(0);
    const totalDays = Math.floor((deadline - startDate) / (1000 * 60 * 60 * 24)); // nombre total de jours

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const elapsedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)); // jours écoulés
            const progressPercentage = Math.floor((elapsedDays / totalDays) * 100); // calculer le pourcentage de progression
            setProgress(progressPercentage);
        }, 1000);

        return () => clearInterval(interval);
    }, [startDate, totalDays]);

    const theme = useTheme();
    const color = progress > 50 ? theme.palette.success.main : theme.palette.warning.main;

    return (
        <LinearProgress variant="determinate" value={progress} sx={{ bgcolor: color }} />
    )
}
