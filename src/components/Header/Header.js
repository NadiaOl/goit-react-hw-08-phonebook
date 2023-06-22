import { NavLink } from "react-router-dom";
import css from './Header.module.css';

export const Header = () => {
    return (
        <nav className={css.nav}>
                <div className={css.navDiv}>
                    <NavLink className={css.link} to='/register'>Registration</NavLink>
                    <NavLink className={css.link} to='/login'>Sign In</NavLink>
                </div>
        </nav>
    )
}