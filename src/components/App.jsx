import { AppBar } from "components/AppBar/AppBar";
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

import { LoginPage } from "./UserMenu/LoginPage";
import { RegisterPage } from "./UserMenu/RegisterPage";
import Container from "./Container/Container";
import { HomePage } from "./UserMenu/HomePage";
import { ContactsPage } from "./UserMenu/ContactsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "tasks/authOperations";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import {PublicRoute} from './PublicRoute/PublicRoute.js'
import { Error } from "./Error/Error";


export const App = ()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
return (

  <Container>
  <Toaster/>
    <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="register" element={
          <PublicRoute>
            <RegisterPage/>
          </PublicRoute>}
          />
        <Route path="login" element={
          <PublicRoute redirectTo="contacts">
            <LoginPage/>
          </PublicRoute>}
        />
        <Route path="contacts" element={
          <PrivateRoute redirectTo="login">
            <ContactsPage />
          </PrivateRoute>} 
          />
          <Route path="*" element={<Error/>}/>  
      </Routes>
    
  </Container>)


}
