import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp";
import {Container, Grid} from "@mui/material";
import {RegisterPageWrapper} from "./RegisterPageStyles";
import Typography from "@mui/material/Typography";
import {LOGIN_ROUTE} from "../../utils/consts";


const RegisterPage = () => {
    return (
        <RegisterPageWrapper>
            <Container maxWidth='sm'>
                <Grid container
                      alignItems={'center'} justifyContent={'center'}
                      textAlign={'center'}>
                    <Typography
                        sx={{fontSize: 'inherit'}}
                    >
                        Register
                    </Typography>
                    <SignUp/>
                    <Typography sx={{fontSize: 'inherit', textDecoration: 'none'}} component={Link} to={LOGIN_ROUTE}
                                underline="none" color="inherit">
                        Already have an account? Sign in
                    </Typography>

                </Grid>
            </Container>
        </RegisterPageWrapper>
    );
};

export default RegisterPage;