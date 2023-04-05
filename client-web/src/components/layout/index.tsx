import { Box, useColorModeValue } from "@chakra-ui/react"
import { Header } from "../header/header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const bg = useColorModeValue('whiteAlpha.500', 'blackAlpha.900')
    return (
        <Box bg={bg} h="100vh">
            <Header title="Welcome" />
            {children}
        </Box>
    )
}