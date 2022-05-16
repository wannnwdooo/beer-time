import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../API/requestsFirebase";
import {Container, Grid, Paper} from "@mui/material";
import {HomePageWrapper} from "./HomePageStyles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Chat, HowToReg, SportsBar} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {LIST_ROUTE, REGISTER_ROUTE} from "../../utils/consts";
import {getAuth} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";


const HomePage = () => {
    const dispatch = useDispatch()

    const {id} = useSelector(state => state.user)

    const auth = getAuth();
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetchData(id, dispatch)
    }, [])

    return (
        <HomePageWrapper>
            <Container maxWidth='sm'>
                <Paper sx={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '0.5vh solid white',
                    borderRadius: 7
                }}>
                    <Typography sx={{fontSize: 'inherit', color: 'white'}}>
                        Application for beer lovers, Brewdog, we welcome all sisters and brothers
                    </Typography>
                </Paper>

                {user ?
                    <Grid container justifyContent="center" spacing={{xs: 0, md: 1}} padding={1}>

                        <Grid item paddingTop={1}>
                            <Button component={Link} to={LIST_ROUTE} size="large"
                                    sx={{background: 'rgba(0, 0, 0, 0.6)', borderRadius: 5}} color='inherit'
                                    variant="outlined"
                                    endIcon={<SportsBar/>}>
                                List
                            </Button>
                        </Grid>
                        <Grid item paddingTop={1}>
                            <Button size="large" sx={{background: 'rgba(0, 0, 0, 0.6)', borderRadius: 5}}
                                    color='inherit'
                                    variant="outlined"
                                    endIcon={<Chat/>}>
                                Chat(coming soon)
                            </Button>
                        </Grid>
                    </Grid>
                    :
                    <Grid container justifyContent="center" spacing={{xs: 0, md: 1}} padding={1}>
                        <Grid item paddingTop={1}>
                            <Button component={Link} to={REGISTER_ROUTE} size="large"
                                    sx={{background: 'rgba(0, 0, 0, 0.6)', borderRadius: 5}} color='inherit'
                                    variant="outlined"
                                    endIcon={<HowToReg/>}>
                                Registration
                            </Button>
                        </Grid>
                        <Grid item paddingTop={1}>
                            <Button component={Link} to={LIST_ROUTE} size="large"
                                    sx={{background: 'rgba(0, 0, 0, 0.6)', borderRadius: 5}} color='inherit'
                                    variant="outlined"
                                    endIcon={<SportsBar/>}>
                                List
                            </Button>
                        </Grid>
                        <Grid item paddingTop={1}>
                            <Button size="large" sx={{background: 'rgba(0, 0, 0, 0.6)', borderRadius: 5}}
                                    color='inherit'
                                    variant="outlined"
                                    endIcon={<Chat/>}>
                                Chat(coming soon)
                            </Button>
                        </Grid>
                    </Grid>
                }
                {/*<IconButton*/}
                {/*    size="large"*/}
                {/*    edge="start"*/}
                {/*    color="inherit"*/}

                {/*    sx={{mr: 1}}*/}

                {/*>*/}
                {/*    <ImageListItem sx={{width: 250}}>*/}
                {/*        <img*/}
                {/*            src={randomBeer}*/}
                {/*        />*/}
                {/*    </ImageListItem>*/}
                {/*</IconButton>*/}
                {/*<GetList items={items}/>*/}
            </Container>
        </HomePageWrapper>
    )
};

export default HomePage;