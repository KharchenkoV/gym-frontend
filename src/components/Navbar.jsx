import {Button, IconButton, Menu, MenuItem, Stack} from '@mui/material'
import React, {useState} from 'react'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import Logo from '../assets/images/kick-boxer.png'
import {AccountCircle} from "@mui/icons-material";

const Navbar = () => {
    const user = localStorage.getItem('user')

    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate()

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = async () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{gap: {sm: '123px', xs: '40px'}, pb: 5,mt: {sm: '32px', xs: '20px'}}}
            px="20px"
        >
            <Link to="/">
                <img src={Logo} alt="logo" style={{width: '68px', height: '68px', margin: '0px 10px'}}/>
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontFamily="Alegreya"
                fontSize="24px"
                alignItems="flex-end"
            >
                <NavLink to="/" className={({ isActive }) => isActive ? "is-active" : ""} style={{textDecoration: 'none', color: '#3A1212'}}>Головна
                    сторінка</NavLink>
                <NavLink to="/tariffs" className={({ isActive }) => isActive ? "is-active" : ""} style={{textDecoration: 'none', color: '#3A1212'}}>Абонементи</NavLink>
                <NavLink to="/exercises" className={({ isActive }) => isActive ? "is-active" : ""} style={{textDecoration: 'none', color: '#3A1212'}}>Вправи</NavLink>

            </Stack>
            <Stack
                direction="row"
                gap="20px"
                fontFamily="Alegreya"
                fontSize="24px"
                alignItems="flex-end">
                { !user ?
                    (
                        <>
                            <Button href='/login' variant="outlined">Увійти</Button>
                            <Button href='/register' variant="outlined">Зареєструватись</Button>
                        </>
                    ) : (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={() => logout()}>Вийти</MenuItem>
                            </Menu>
                        </div>
                    )
                }
            </Stack>
        </Stack>
    )
}

export default Navbar