import { AppBar } from "components/AppBar/AppBar";
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from "./UserMenu/LoginPage";
import { RegisterPage } from "./UserMenu/RegisterPage";
import Container from "./Container/Container";
import { HomePage } from "./UserMenu/HomePage";
import { ContactsPage } from "./UserMenu/ContactsPage";

export const App = ()=> {
return (
<Container>
  <AppBar/>
  
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="contacts" element={<ContactsPage/>}/>
          </Routes>
  
</Container>
)

}
