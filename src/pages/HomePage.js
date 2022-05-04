import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../API/requestsFirebase";
import {Container} from "@mui/material";


const HomePage = () => {
    const dispatch = useDispatch()

    const {id} = useSelector(state => state.user)


    useEffect(() => {
        fetchData(id, dispatch)
    }, [])



    return (
        <Container maxWidth='lg'>
            <h1>Welcome</h1>

        </Container>
    )
};

export default HomePage;