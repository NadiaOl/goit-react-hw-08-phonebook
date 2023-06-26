import css from './AppBar.module.css';
import { Navigation } from 'components/UserMenu/Navigation';
import { AuthNav } from 'components/UserMenu/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'tasks/selectors';
import { useSelector } from 'react-redux';


export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
<div>
  <header className={css.container}>
    <Navigation/>
{isLoggedIn ? <UserMenu/> : <AuthNav/>}
  </header>


</div>
  )
}
