import { Box, useColorModeValue } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Outlet, useNavigate} from "react-router-dom"
import { useUserAuth } from "../hooks/useUserAuth"
import { useEffect } from "react"

const AppLayout = () => {
    const props = useUserAuth()
    const navigate = useNavigate();
    useEffect(()=> {
        if(!props?.isLogIn()){
            navigate("/")
        }
    },[props?.user])

    const bg = useColorModeValue('whiteAlpha.500', 'blackAlpha.900')
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