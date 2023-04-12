import { Flex } from "@chakra-ui/react"
import { useUserAuth } from "../hooks/useUserAuth";
import { Login } from "../components/FormAuth/Login"
import { Navigate } from "react-router-dom";



const LoginPage = () => {
    const props = useUserAuth()

    const handlerSubmit = (email: string, pass: string) => {
        try {
            props?.signInEmail(email, pass)
        } catch (error) {
            console.error(error)
        }
    }
    console.log("isLogin", props?.isLogIn())
    return (
        <Flex direction="column">

            {props?.isLogIn() && (
                <Navigate to="/app" replace={false} />
            )}
            <Login login={handlerSubmit} />
        </Flex>
    )
}

export default LoginPage