import css from './AppBar.module.css';
import { Navigation } from 'components/UserMenu/Navigation';
import { AuthNav } from 'components/UserMenu/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn, getToken, getUsername } from 'tasks/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser, logOutUser, userToken } from 'tasks/authOperations';


export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const token = useSelector(getToken)
  const name = useSelector(getUsername)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (token && !name) {
      userToken.set(token)
      dispatch(fetchCurrentUser()).unwrap().catch(()=> dispatch(logOutUser()))
    }
  }, [token, name, dispatch]
  )

  return (
    <div>
      <header className={css.container}>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </header>
    </div>
  )
}
