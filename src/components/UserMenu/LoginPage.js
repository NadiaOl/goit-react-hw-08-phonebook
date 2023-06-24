import { useState } from "react";
import { useDispatch } from "react-redux";
import css from './Views.module.css';
// import { useLocation } from "react-router-dom";
import { logInUser } from "tasks/authOperations";



export const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate()
    // const locationDetails = useLocation()
    // const back = locationDetails.state ?? '/'

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
            return;
        }
    };
    //     const handleBack = () => {
    // navigate(back)
    // }

    const handleSubmit = e => {
        e.preventDefault();
      dispatch(logInUser({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={css.formContainer}>
            {/* <button className={css.linkBack} onClick={handleBack}>Go back</button> */}
            <h1 className={css.formTitle}>Sign In</h1>
            <div className={css.formSection}>
                <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
                    <label className={css.label}>
                        E-mail
                        <input className={css.input}        
                            type="email"
                            name="email"
                            value={email}
                            autoComplete="on"
                            onChange={handleChange}
                        />
                    </label>
                    <label className={css.label}>
                        Password
                        <input className={css.input}        
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </label>
                    <button className={css.button} type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
  }