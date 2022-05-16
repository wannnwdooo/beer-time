import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import { privateRoutes, publicRoutes } from "../Routes/Routes";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, page }) => (
        <Route key={path} path={path} element={page} />
      ))}
      <Route path="/*" element={<HomePage />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, page }) => (
        <Route key={path} path={path} element={page} />
      ))}
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
