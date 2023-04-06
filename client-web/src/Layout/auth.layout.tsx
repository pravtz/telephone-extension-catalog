import { Flex, Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <Flex direction="column" w="100vw" h="100vh" align="center" justify="center">
            <Box border="1px solid #555" bg="#444">
                <Outlet />
            </Box>
        </Flex>
    )
}

export default AuthLayout