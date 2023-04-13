import { Box, useColorModeValue } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {

    const bg = useColorModeValue('whiteAlpha.500', 'blackAlpha.900')

    console.log("layout carregando...")
    return (
        <Box display='flex' flexDirection='column' bg={bg} h="100vh">
            <Header title="Welcome" />
            <Box height={'calc(100vh - 80px)'} width='100vw' p="4" >
                <Outlet />
            </Box>
        </Box>
    )
}

export default AppLayout