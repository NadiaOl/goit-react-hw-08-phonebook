import React from 'react';
import css from './Views.module.css';

export const HomePage = () => (
<div className={css.miniature}>
    <p className={css.title}>Welcome to the Contact Book</p>
    <img src="https://venturebeat.com/wp-content/uploads/2012/02/contacts.jpg?fit=482%2C485&strip=all" width={500} alt="contacts book"></img>
</div>
);
