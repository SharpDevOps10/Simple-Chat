import React, {useContext, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";

import {CHAT_ROUTE, LOGIN_ROUTE} from "../utilities/constants";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";


const AppRouter = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  return user ?
    (
      <Routes>
        {privateRoutes.map(({path, Component}) => (
          <Route key={path} path={path} element={<Component/>}/>
        ))}
        <Route path="*" element={<Navigate to={CHAT_ROUTE} replace/>}/>
      </Routes>
    ) : (
      <Routes>
        {publicRoutes.map(({path, Component}) => (
          <Route key={path} path={path} element={<Component/>}/>
        ))}
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace/>}/>
      </Routes>
    );
}

export default AppRouter;