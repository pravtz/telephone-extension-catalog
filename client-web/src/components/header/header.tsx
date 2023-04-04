import { Avatar, Flex, Text } from "@chakra-ui/react"

type HeaderProps = {
    title: string
}

export const Header = ({title}: HeaderProps) => {
    return (
        <Flex h={80} w={"full"} justify={"space-between"}>
            <Text>{title}</Text>

            <Avatar/>

        </Flex>
    )
}