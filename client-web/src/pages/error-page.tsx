import { Flex, Text } from "@chakra-ui/react"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error: any = useRouteError()
    return (
        <Flex direction='column' h='100vh' justify='center' align="center">
            <Text as="h1" fontSize='5xl'>
                Oops!
            </Text>
            <Text fontSize='3xl' as="p">
                Sorry, an unexpected error has occurred.
            </Text>
            <Text as="p"><i>{error.statusText || error.message}</i></Text>
        </Flex >
    )
}

export default ErrorPage