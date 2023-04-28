import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import '../assets/css/StyleCircle.scss';

export default function FollowMouseCircle() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {
            setPosition({ x: event.clientX, y: event.clientY });
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Box className='circle' style={{top: position.y, left: position.x,}}/>
    );
}