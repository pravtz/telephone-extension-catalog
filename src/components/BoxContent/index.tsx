import { Box, useColorModeValue } from "@chakra-ui/react"
import React from "react"


export const BoxContent = ({ children }: { children: React.ReactNode }) => {
    const bg = useColorModeValue('#eee', '#252525');
    const borderBox = useColorModeValue("#ddd", 'whiteAlpha.200')

    return (
        <Box h='full' borderRadius='8px' p='8px' border="1px" borderColor={borderBox} bg={bg}>
            {children}
        </Box>
    )
}