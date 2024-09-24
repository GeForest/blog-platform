import React from "react";
import { Typography, Box } from '@mui/material';
import CustomAvatar from '../../header/CustomAvatar'
import { formatTime } from "../../../utils/date/formatTime";

export default function PostHeader({post}) {
    const { firstName, lastName } = post.idUser
    const time = formatTime(post.date)

    return (
        <Box 
            sx={{
                p: '12px 16px',
                display: 'flex',
                borderBottom: '1px solid #b1b1b1'
            }}
        >  
            <CustomAvatar values={{firstName, lastName}} />
            <Box
                sx={{
                    paddingLeft: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="span"
                    sx={{
                        fontSize: 15,
                        fontFamily: '"Lato", sans-serif',
                        fontWeight: 600,
                        letterSpacing: .5,
                        color: '#333333',
                        lineHeight: 1.3,
                        mb: .2,
                    }}
                >
                    {firstName} {lastName}
                </Typography>
                <Typography variant="span"
                    sx={{
                        fontSize: 13,
                        fontFamily: '"Lora", serif',
                        fontWeight: 400,
                        letterSpacing: 1,
                        color: '#757575',
                        lineHeight: 1.2,
                    }}
                >
                    {time}
                </Typography>
            </Box>
        </Box>
    )
}