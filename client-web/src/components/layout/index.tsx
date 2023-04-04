import { Box } from "@chakra-ui/react"
import { Header } from "../header/header"

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <Box>
            <Header title="Welcome"/>
            {children}
        </Box>
    )
}