import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import css from './Views.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'tasks/selectors';
import { logOutUser } from 'tasks/authOperations';
import { toast } from 'react-hot-toast';

export const UserMenu = () => {
    const name = useSelector(getUsername);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
      dispatch(logOutUser());
      navigate('/')
      toast.success('See you soon!')
    }

  
    return (
      <div className={css.navDiv}>
          <p className={css.link}>Welcome, {name}</p>
        <NavLink className={css.link} onClick={handleLogOut}>
          Log Out
        </NavLink>
      </div>
    );
  }