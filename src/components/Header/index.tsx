import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react"
import { ButtonDarkMode } from "../ButtonDarkMode";
import { AvatarMenu } from "../AvatarMenu";
import { Link as LinkRouter } from "react-router-dom";


type HeaderProps = {
    title: string
}

export const Header = ({ title }: HeaderProps) => {
    const isLogged = true

    const bg = useColorModeValue('#eee', '#252525');
    const borderBox = useColorModeValue("#ddd", 'whiteAlpha.200')

    return (
        <Flex h="80px" w="full" justify="space-between" borderBottom='1px' bg={bg} borderColor={borderBox} align="center" >
            <Link to="/app" as={LinkRouter}>{title}</Link>
            <Box>
                {isLogged
                    ? <AvatarMenu />
                    : <>
                        <Link>Login</Link>
                        <ButtonDarkMode />
                    </>
                }
            </Box>
        </Flex >
    )
}