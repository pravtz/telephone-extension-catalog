import { Text } from "@chakra-ui/react"

export const Footer = ({ copyright }: { copyright: string }) => {
    return (
        <Text>{copyright}</Text>
    )
}