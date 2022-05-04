import React from 'react';
import Form from "../Form/Form";
import {Grid} from "@mui/material";
import {handleLogin} from "../../API/requestsFirebase";

const Login = () => {

    return (
        <Grid container>
            <Form
                title='SIgn in'
                handleClick={handleLogin}
            />
        </Grid>
    );
};

export default Login;