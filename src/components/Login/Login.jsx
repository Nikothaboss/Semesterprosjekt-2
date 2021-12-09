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
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const logIn = async () =>{
        const body = JSON.stringify({identifier: username, password: password});
        const url = base_url + "/auth/local"
        const request = {
            method: "POST",
            body: body,
            headers: {
                "Content-Type" : "application/json"
            },
        }
        
        try{
            const res = await fetch(url, request)
            const data = await res.json()
            console.log(data)
        }catch(err){
            console.log(err)
        }

    }

    

    return (
        <LoginStyled>

            <Flex className="formContainer">
                <FormStyled w="500px" m="auto">
                    <Heading textAlign="left" w="100%" mb="1rem" fontSize="1.9rem" color="#f3f3f3">Login as Admin</Heading>
                    <FormControl id="username" className="formItem">
                        <FormLabel color="#f2f2f2">Username</FormLabel>
                        <Input type="username" onChange={e => setUsername(e.target.value)} color="#f3f3f3" />
                    </FormControl>
                    <FormControl id="password" className="formItem">
                        <FormLabel color="#f2f2f2">Password</FormLabel>
                        <Input type="password" onChange={e => setPassword(e.target.value)} color="#f3f3f3"/>
                        <button onClick={logIn}>Log in</button>
                    </FormControl>
                </FormStyled>
            </Flex>
        </LoginStyled>
    )
}

export default Login
