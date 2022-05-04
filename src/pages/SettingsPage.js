import React from 'react';
import {Container, Grid} from "@mui/material";

import SettingsForm from "../components/SettingsForm/SettingsForm";

const SettingsPage = () => {


    return (
        <Container maxWidth='xs'>
            <Grid container
                  alignItems={'center'} justifyContent={'center'}
                  textAlign={'center'}>
                <SettingsForm/>
            </Grid>

        </Container>
    );
};

export default SettingsPage;