import { Flex, Box, Image, Divider, Text, useMediaQuery } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import imageCapa from '../assets/capa.svg'



const AuthLayout = () => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    return (
        <Flex direction={["column", "column", "row"]} w="100vw" h="100vh" align="center" justify="center" gap='4'>
            <Box w={['90%', '90%', '30%']}>
                <Text fontSize={["xl", "4xl"]} as='h1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                <Text fontSize={["sm", "md"]} as='h3'>Vestibulum lobortis commodo mi, et consectetur nunc. Cras ornare ornare sapien quis consequat. Mauris finibus felis ligula, cursus euismod eros congue vitae. Donec a nulla eros.</Text>
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