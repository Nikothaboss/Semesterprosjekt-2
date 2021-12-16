import { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/layout'
import { LoginStyled, FormStyled } from './login.styled'
import { FormControl, FormLabel,} from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { useLocalStorage } from '../../utils/localStorage'
import {base_url} from "../../utils/API"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useLocalStorage("token", "")
    const [user, setUser] = useLocalStorage("user", "")


    const logIn = async (e) =>{
        e.preventDefault()
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
            if(data.user){
                setToken(data.jwt)
                setUser(data.user)
                console.log(token, user)
                window.location.href = "/Admin"

            }
        }catch(err){
            console.log(err)
        }

    }

    

    return (
        <LoginStyled onSubmit={logIn}>

            <Flex className="formContainer">
                <FormStyled w="80%" m="auto" >
                    <Heading textAlign="left" w="100%" mb="1rem" fontSize="1.9rem" color="#f3f3f3">Login as Admin</Heading>
                    <FormControl id="username" className="formItem">
                        <FormLabel color="#f2f2f2">Username</FormLabel>
                        <Input type="username" onChange={e => setUsername(e.target.value)} color="#f3f3f3" />
                    </FormControl>
                    <FormControl id="password" className="formItem">
                        <FormLabel color="#f2f2f2">Password</FormLabel>
                        <Input type="password" onChange={e => setPassword(e.target.value)} color="#f3f3f3"/>
                        <button type="submit">Log in</button>
                    </FormControl>
                </FormStyled>
            </Flex>
        </LoginStyled>
    )
}

export default Login
