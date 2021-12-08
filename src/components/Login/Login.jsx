import { useEffect, useState } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { LoginStyled, FormStyled } from './login.styled'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/input'
  import { useFetch } from '../../utils/fetch'
  import { useLocalStorage } from '../../utils/localStorage'
  import {base_url} from "../../utils/API"



const Login = () => {
    const body = JSON.stringify({identifier: "Nikolai", password: "SkylinE94@strapi"});
    const url = base_url + "/auth/local"
    const request = {
        method: "POST",
        body: body,
        headers: {
            "Content-Type" : "application/json"
        },
    }
    const { data } =  useFetch(url, request)
    console.log(data)

    // const logIn = async (username, password) =>{
        
        

        
    //     return data
    // }

    

    return (
        <LoginStyled>

            <Flex className="formContainer">
                <FormStyled w="500px" m="auto">
                    <Heading textAlign="left" w="100%" mb="1rem" fontSize="1.9rem" color="#f3f3f3">Login as Admin</Heading>
                    <FormControl id="username" className="formItem">
                        <FormLabel color="#f2f2f2">Username</FormLabel>
                        <Input type="username" />
                    </FormControl>
                    <FormControl id="password" className="formItem">
                        <FormLabel color="#f2f2f2">Password</FormLabel>
                        <Input type="password" />
                    </FormControl>
                </FormStyled>
            </Flex>
        </LoginStyled>
    )
}

export default Login
