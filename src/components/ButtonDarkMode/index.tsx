import { IconButton, useColorMode } from "@chakra-ui/react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

export const ButtonDarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            variant="ghost"
            size="lg"
            onClick={toggleColorMode}
            aria-label="Button Dark Mode"
            icon={colorMode === 'dark' ? <MdDarkMode /> : <MdLightMode />}>
        </IconButton>
    )
}