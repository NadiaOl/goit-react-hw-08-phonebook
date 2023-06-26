import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsLoggedIn } from "tasks/selectors"

export const PrivateRoute = ({ children }) => {
    const isAuth = useSelector(getIsLoggedIn)
    return isAuth ? children : <Navigate to="/login"/>
}