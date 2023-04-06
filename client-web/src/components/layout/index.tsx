import { Box, useColorModeValue } from "@chakra-ui/react"
import { Header } from "../header/header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const bg = useColorModeValue('whiteAlpha.500', 'blackAlpha.900')
    return (
        <Box display='flex' flexDirection='column' bg={bg} h="100vh">
            <Header title="Welcome" />
            <Box width='100vw' >
                {children}
            </Box>
        </Box>
    )
}