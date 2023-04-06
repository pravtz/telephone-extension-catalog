import { Box, Flex, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { ButtonDarkMode } from "../ButtonDarkMode";
import { AvatarMenu } from "../AvatarMenu";

type HeaderProps = {
    title: string
}

export const Header = ({ title }: HeaderProps) => {
    const isLogged = true

    const bg = useColorModeValue('#eee', '#252525');
    const borderBox = useColorModeValue("#ddd", 'whiteAlpha.200')

    return (
        <Flex h="80px" w="full" justify="space-between" borderBottom='1px' bg={bg} borderColor={borderBox} align="center" >
            <Text>{title}</Text>
            <Box>
                { isLogged 
                    ?  <AvatarMenu /> 
                    : <>
                        <Link>Login</Link>
                        <ButtonDarkMode />
                    </>
                }
            </Box>
        </Flex >
    )
}