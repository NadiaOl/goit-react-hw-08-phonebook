import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Views.module.css';

export const Navigation = () => (
    <div className={css.navDiv}>
      <NavLink to="/" exact className={css.link}>
        Home
      </NavLink>
  
      <NavLink
        to="/contacts"
        exact
        className={css.link}
      >
        Contacts
      </NavLink>
    </div>
  );
  