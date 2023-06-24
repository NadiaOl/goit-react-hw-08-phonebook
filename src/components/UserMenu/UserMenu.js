import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Views.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'tasks/selectors';
import { logOutUsser } from 'tasks/authOperations';

export const UserMenu = () => {
    const name = useSelector(getUsername);
    const dispatch = useDispatch();

  
    return (
      <div className={css.navDiv}>
          <p className={css.link}>Welcome, {name}</p>
        <NavLink className={css.link} onClick={()=>dispatch(logOutUsser())}>
          Log Out
        </NavLink>
      </div>
    );
  }