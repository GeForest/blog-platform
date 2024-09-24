import React from "react"
import { 
    AppBar, 
    Toolbar,
    Box,
} from '@mui/material';
import { useSelector } from "react-redux";

import HeaderForm from "./HeaderForm";
import HeaderProfile from "./HeaderProfile";

export default function Header() {
    const token = useSelector((state)=>state.user.token)

    return (
        <AppBar
            position="fixed"
            sx={{
                boxShadow: '0 2px 7px rgba(0, 0, 0, 0.2)',
                background: '#ffffff'
            }}
        >
            <Toolbar variant="dense">
                
                <Box>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="50"
                        viewBox="0 0 200 50"
                        className="user__select"
                    > 
                        <title>Dachnik</title>
                        <text
                            x="0"
                            y="40"
                            fontFamily="sans-serif"
                            fontSize="30"
                            fontWeight="bold"
                            letterSpacing="1.5"
                            fill="#0070f3"
                        >
                            DACHNIK
                        </text>
                    </svg>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                {!token ? <HeaderForm /> : <HeaderProfile />}
            </Toolbar>
        </AppBar>
    )
}