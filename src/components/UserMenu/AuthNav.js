import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Views.module.css';

export const AuthNav =()=> {
    return (
    <div>
        <div className={css.navDiv}>
            <NavLink className={css.link} to='/register'>Registration</NavLink>
            <NavLink className={css.link} to='/login'>Sign In</NavLink>
        </div>
    </div>
    );
}