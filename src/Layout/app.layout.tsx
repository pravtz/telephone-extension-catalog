import { Box, useColorModeValue } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Outlet} from "react-router-dom"
import { useUserAuth } from "../hooks/useUserAuth"


const AppLayout = () => {
    const props = useUserAuth()
    const bg = useColorModeValue('whiteAlpha.500', 'blackAlpha.900')

    console.log("layout carregando...")
    return (
        <Box display='flex' flexDirection='column' bg={bg} h="100vh">
            <Header title="Welcome" />
            <Box width='100vw' >
                <Outlet />
            </Box>
        </Box>
    )
}

export default AppLayout