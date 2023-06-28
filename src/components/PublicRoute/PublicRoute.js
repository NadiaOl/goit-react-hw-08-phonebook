import { useSelector } from "react-redux"
import {getIsLoggedIn} from '../../tasks/selectors'
import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {
	const isAuth = useSelector(getIsLoggedIn)
	return !isAuth ? children : <Navigate to="/contacts"/>
}