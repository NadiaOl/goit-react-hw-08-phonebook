import { AppBar } from "components/AppBar/AppBar";
import { Route, Routes } from 'react-router-dom';

import { HomePage } from "../views/HomePage";
import { LoginPage } from "../views/LoginPage";
import { RegisterPage } from "../views/RegisterPage";

export const App = ()=> {
return (

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="contacts"element={<AppBar/>}/>
        </Routes>

)

}
