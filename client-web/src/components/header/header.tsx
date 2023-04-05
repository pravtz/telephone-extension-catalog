import { Avatar, Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { ButtonDarkMode } from "../ButtonDarkMode";

type HeaderProps = {
    title: string
}

export const Header = ({ title }: HeaderProps) => {

    const bg = useColorModeValue('#eee', 'blackAlpha.400');
    const borderBox = useColorModeValue("#44", 'whiteAlpha.200')

    return (
        <Flex h="80px" w="full" justify="space-between" borderBottom='1px' bg={bg} borderColor={'whiteAlpha.200'} align="center" >
            <Text>{title}</Text>
            <Box>
                <Avatar />
                <ButtonDarkMode />
            </Box>
        </Flex >
    )
}