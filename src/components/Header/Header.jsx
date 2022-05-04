import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import {Avatar, Container, Menu, MenuItem, Tooltip} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import {HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, SETTINGS_ROUTE} from "../../utils/consts";
import {getAuth} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../store/slices/userSlices";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    const dispatch = useDispatch()

    const auth = getAuth();
    const [user] = useAuthState(auth)

    const {email} = useSelector(state => state.user)
    const ava = useSelector(state => state.user.avatar)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        auth.signOut()
        setAnchorEl(null);
        dispatch(removeUser())
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            component={Link} to={HOME_ROUTE}
                        >
                            <HomeIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}/>

                        {user ?
                            <div>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleMenu} sx={{p: 0}}>
                                        <Avatar alt={email} src={ava}/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
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

                                    <MenuItem disabled>
                                        <Typography textAlign="center">{email}</Typography>
                                    </MenuItem>
                                    <MenuItem component={Link} to={PROFILE_ROUTE}>
                                        <Typography textAlign="center">Profile</Typography>
                                    </MenuItem>
                                    <MenuItem component={Link} to={SETTINGS_ROUTE}>
                                        <Typography textAlign="center">Settings</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={logout} component={Link} to={HOME_ROUTE}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </div>
                            // <Button onClick={() => auth.signOut()} variant='outlined' color="inherit" component={Link} to={LOGIN_ROUTE}>Logout</Button>
                            :
                            <div>
                                <Button color="inherit" component={Link} to={LOGIN_ROUTE}>Login</Button>
                                <Button color="secondary" variant='contained'
                                        component={Link} to={REGISTER_ROUTE}>Sign Up</Button>
                            </div>
                        }


                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;