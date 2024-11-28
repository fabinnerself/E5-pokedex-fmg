import { Outlet, Navigate } from "react-router-dom"
import { useNameContext } from "../contexts/nameContext"


function ProtectedRoutes({children}) {
    const [name] = useNameContext()

    if (!name) {
        return <Navigate to="/" />
    }
    
    return children ? children : <Outlet />
}

export default ProtectedRoutes