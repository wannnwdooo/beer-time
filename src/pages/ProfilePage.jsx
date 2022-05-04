import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Container, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {fetchData} from "../API/requestsFirebase";

const ProfilePage = () => {
    const dispatch = useDispatch()

    const {email, id} = useSelector(state => state.user)
    const ava = useSelector(state => state.user.avatar)
    const usernameValue = useSelector(state => state.user.username)
    const firstnameValue = useSelector(state => state.user.firstname)
    const lastnameValue = useSelector(state => state.user.lastname)
    const countryValue = useSelector(state => state.user.country)
    const preferencesValue = useSelector(state => state.user.preferences)

    useEffect(() => {
        fetchData(id, dispatch)
    }, [])

    return (
        <Container maxWidth='md'>

            <Grid container
                  alignItems={'center'} justifyContent={'center'}
                  textAlign={'center'}>
                <Grid item container xs={12} md={6} justifyContent={'center'} padding={3}>
                    <Avatar
                        alt={email}
                        src={ava}
                        sx={{width: 300, height: 300}}
                    />
                </Grid>

                <Grid item container xs={12} md={6} justifyContent={'center'}
                      alignItems={'center'}>
                    <Paper elevation={8}>
                    <Box padding={3}>
                        <Paper elevation={2}>
                    <Typography variant='h4' component="div" gutterBottom>
                        {firstnameValue} {lastnameValue}
                    </Typography>
                        </Paper>
                    <Typography variant='h5' component="div" gutterBottom>
                        {usernameValue}
                    </Typography>
                        <Typography variant='h6' component="div" gutterBottom>
                        {countryValue}
                    </Typography>
                        <Paper elevation={4} sx={{padding: 1}}>
                        <Typography variant='h6' component="div" gutterBottom>
                        Beer preferences: {preferencesValue}
                    </Typography>
                        </Paper>
                </Box>
            </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};

export default ProfilePage;