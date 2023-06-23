import { useState } from "react";
// import { useDispatch } from "react-redux";
import css from './Views.module.css';
import { useLocation, useNavigate } from "react-router-dom";


export const RegisterPage = () => {
    // const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const locationDetails = useLocation()
    const back = locationDetails.state ?? '/'

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };
    const handleBack = () => {
        navigate(back)
    }

    const handleSubmit = e => {
        e.preventDefault();
    //   dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={css.formContainer}>
            <button className={css.linkBack} onClick={handleBack}>Go back</button>
            <div className={css.formSection}>
                <h1 className={css.formTitle}>Registration form</h1>
                <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
                    <label className={css.label}>
                        Name
                        <input className={css.input} type="text" name="name" value={name} onChange={handleChange} />
                    </label>
                    <label className={css.label}>
                        E-mail
                        <input className={css.input} type="email" name="email" value={email} onChange={handleChange}
                    />
                    </label>
                    <label className={css.label}>
                        Password
                        <input className={css.input} type="password" name="password" value={password} onChange={handleChange}
                    />
                    </label>
                    <button className={css.button} type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
  }