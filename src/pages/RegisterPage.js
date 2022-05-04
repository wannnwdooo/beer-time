import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import {Container, Grid} from "@mui/material";


const RegisterPage = () => {
    return (
        <Container>
            <Grid container
                  alignItems={'center'} justifyContent={'center'}
                  textAlign={'center'}>
            <h1>Register</h1>
            <SignUp/>
            <p>
                Already have an account?   <Link to='/login'>Sign in</Link>
            </p>
            </Grid>
        </Container>
    );
};

export default RegisterPage;