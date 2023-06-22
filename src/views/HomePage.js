import React from "react";
import css from './Views.module.css';
import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";

export const HomePage =() => {
    return (
        <>
            <Header/>
            <div className={css.container}>
                <p className={css.title}>Welcome to the Contact Book</p>
                <img src="https://venturebeat.com/wp-content/uploads/2012/02/contacts.jpg?fit=482%2C485&strip=all" width={500} alt="contacts book"></img>
            </div>
            <Outlet/>
        </>

        
    )
}