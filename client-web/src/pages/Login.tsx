import { Flex } from "@chakra-ui/react"

import { Login } from "../components/FormAuth/Login"
import { Navigate } from "react-router-dom";
import { useState } from "react";


const LoginPage = () => {
    const [user, setUser] = useState<Boolean>(false)

    const handlerSubmit = (email: string, pass: string) => {
        console.log('email', email)
        console.log('pass', pass)
        setUser(true)


    }
    return (
        <Flex direction="column">

            {user && (
                <Navigate to="/app" replace={true} />
            )}
            <Login login={handlerSubmit} />
        </Flex>
    )
}

export default LoginPage