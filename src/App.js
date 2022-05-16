import * as React from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import {getAuth} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader/Loader";
import {injectGlobal} from "./Style/Global";
import {ThemeProvider} from "@mui/material";
import {theme} from "./utils/theme";

function App() {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        return <Loader/>
    }
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Header/>
                <AppRouter/>
            </ThemeProvider>

        </BrowserRouter>
    );
}

export default App;
