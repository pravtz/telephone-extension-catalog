import { Navigate } from "react-router-dom"
import { useUserAuth } from "../../hooks/useUserAuth"

export const ProtectedRoute = ({children} : {children: any}) => {
    const props = useUserAuth()
    const user = props?.user
    console.log('protectedRoute user: ' ,user)

    if(!user) {
        return <Navigate to='/'/>
    }
    console.log("protectRoute carregando...")

    return children
}