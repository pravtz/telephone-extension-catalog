import { Button, useColorMode } from "@chakra-ui/react"

export const ButtonDarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
}