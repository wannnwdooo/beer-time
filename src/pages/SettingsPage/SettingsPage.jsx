import React, {useEffect, useState} from 'react';
import {Avatar, Container, Grid, styled, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import {fetchData, handleAdd, uploadFile} from "../../API/requestsFirebase";
import {useDispatch, useSelector} from "react-redux";
import {SettingsPageWrapper} from "./SettingsPageStyles";

const SettingsPage = () => {

    const dispatch = useDispatch()

    const {email, id} = useSelector(state => state.user)
    const ava = useSelector(state => state.user.avatar)
    const usernameValue = useSelector(state => state.user.username)
    const firstnameValue = useSelector(state => state.user.firstname)
    const lastnameValue = useSelector(state => state.user.lastname)
    const countryValue = useSelector(state => state.user.country)
    const preferencesValue = useSelector(state => state.user.preferences)

    const [file, setFile] = useState('')
    const [form, setForm] = useState({
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        country: countryValue,
        preferences: preferencesValue,
    })
    const [avatar, setAvatar] = useState('')
    const [per, setPer] = useState(null)

    useEffect(() => {
        fetchData(id, dispatch)
    }, [])

    useEffect(() => {
        file && uploadFile(file, setPer, setAvatar)
    }, [file])

    const Input = styled('input')({
        display: 'none',
    });

    return (
        <SettingsPageWrapper>
            <Container maxWidth='xs' >
                <Grid container rowSpacing={2} marginTop={10} alignItems={'center'}
                      justifyContent={'center'} textAlign={'center'}>
                    <Grid container justifyContent="center" padding={2}>
                        <Avatar
                            alt={email}
                            src={ava}
                            sx={{width: 150, height: 150}}
                        />
                    </Grid>
                    <Grid container justifyContent="center" padding={1}>
                        <label htmlFor="icon-button-file">
                            <Input onChange={e => setFile(e.target.files[0])} accept="image/*" id="icon-button-file"
                                   type="file"/>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera/>
                            </IconButton>
                        </label>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField value={form.username}
                                   onChange={event => setForm({...form, username: event.target.value})}
                                   label="Username" variant="filled" color="dark" autoComplete='off'/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField value={form.firstname}
                                   onChange={event => setForm({...form, firstname: event.target.value})}
                                   label="First name" variant="filled" color="dark" autoComplete='off'/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField value={form.lastname}
                                   onChange={event => setForm({...form, lastname: event.target.value})}
                                   label="Last name" variant="filled" color="dark" autoComplete='off'/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField value={form.country}
                                   onChange={event => setForm({...form, country: event.target.value})}
                                   label="Country" variant="filled" color="dark" autoComplete='off'/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            value={form.preferences}
                            onChange={event => setForm({...form, preferences: event.target.value})}
                            label="Beer preferences"
                            multiline
                            maxRows={3}
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs>
                        {per !== null && per < 100
                            ? <LoadingButton
                                loading
                                loadingPosition="start"
                                startIcon={<SaveIcon/>}
                                variant="outlined"
                            >
                                Save
                            </LoadingButton>
                            : <Button variant="contained" color="dark" type='submit' onClick={(e) => handleAdd(
                                e, ava, avatar, form.username, form.firstname, form.lastname, form.country, form.preferences, dispatch, id
                            )}>
                                Update
                            </Button>
                        }
                    </Grid>
                </Grid>
            </Container>
        </SettingsPageWrapper>
    );
};

export default SettingsPage;