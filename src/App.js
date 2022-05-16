import * as React from "react";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader/Loader";
import { injectGlobal } from "./Style/Global";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

function App() {
  const auth = getAuth();
  const [, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <AppRouter />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
