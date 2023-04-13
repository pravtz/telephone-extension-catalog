import { Box, FormControl, Input } from "@chakra-ui/react"


type FormSearchType = {
    setSearch: any
}

export const FormSearch =({setSearch}:FormSearchType) => {

   const handlerSearch = (e:React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
   }

    return (
        <Box >
            <FormControl  >
                <Input type="email" onChange={handlerSearch} />
            </FormControl>
        </Box>
    )
}