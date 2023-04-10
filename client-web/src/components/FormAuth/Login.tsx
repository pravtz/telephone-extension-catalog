import { FormControl, Box, FormLabel, Input, FormErrorMessage, Button, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'


const schema = z.object({
    email: z.string().email({ message: "O endereço de e-mail é invalido!" }),
    pass: z.string().min(6, { message: "O password invalido!" })
})

type LoginType = z.infer<typeof schema>;

type LoginProps = {
    login: (email: string, pass: string) => void
}

export const Login = ({ login }: LoginProps) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginType>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schema)
    })

    const onSubmit = async ({ email, pass }: LoginType) => {

        await login(email, pass);
        reset();
    }

    return (
        <Flex direction='column'>

            <Box as="form" onSubmit={handleSubmit(onSubmit)} display='flex' flexDirection="column" gap="4">

                <FormControl isInvalid={!!errors.email} >
                    <FormLabel>Email</FormLabel>
                    <Input type="email" {...register('email')} />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.pass}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password"  {...register('pass')} />
                    <FormErrorMessage>{errors.pass?.message}</FormErrorMessage>
                </FormControl>

                <Button border='1px solid' w='full' type="submit">Entrar</Button>
            </Box>
        </Flex>
    )
}