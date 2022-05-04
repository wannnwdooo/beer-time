import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login/Login";
import {Container, Grid} from "@mui/material";

const LoginPage = () => {
    return (
        <Container>
            <Grid container
            alignItems={'center'} justifyContent={'center'}
            textAlign={'center'}>

            <h1>Login</h1>
            <Login/>
            <p>
                Or <Link to='/register'>register</Link>
            </p>
        </Grid>
        </Container>
    );
};

export default LoginPage;