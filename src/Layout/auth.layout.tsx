import { Flex, Box, Image, Divider, Text, useMediaQuery } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import imageCapa from '../assets/capa.svg'

const TITLE_CAPA = "Catálogo de Ramais"
const TEXT_CAPA = "Crie um catálogo de ramais e pare de perder tempo procurando números de ramais em diferentes lugares, centralize as informações e compartilhe com outros usuarios. Experimente agora e simplifique sua forma de buscar e contatar os colegas."

const AuthLayout = () => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    return (
        <Flex direction={["column", "column", "row"]} w="100vw" h="100vh" align="center" justify="center" gap='4'>
            <Box w={['90%', '90%', '30%']}>
                <Text fontSize={["md", "xl"]} as='h1'>Bem-vindo(a) ao</Text>
                <Text fontSize={["xl", "4xl"]} as='h1'>{TITLE_CAPA}</Text>
                <Text fontSize={["sm", "md"]} as='h3'>{TEXT_CAPA}</Text>
                <Box m='auto' w={['240px', '340px', '400px']}>
                    <Image src={imageCapa} />
                </Box>
            </Box>
            {isLargerThan800 &&
                <Divider orientation={"vertical"} height='50%' />
            }
            <Box border="1px solid #555" bg="transparent" px="4" py='6' borderRadius='xl' >
                <Outlet />
            </Box>
        </Flex>
    )
}

export default AuthLayout