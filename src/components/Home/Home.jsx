import React from 'react'
import hero from "../../img/hero-bg.jpg"
import { HomeStyled } from './home.styled'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid } from '@chakra-ui/layout'
import { useFetch } from '../../utils/fetch'

const url = "http://localhost:1337/products"

const FeaturedProduct = () =>{
    return (
        null
    )
}

const Home = () => {
    const {response} = useFetch(url)
    return (
        <HomeStyled>
            <Box bgImage={`url("${hero}")`} className="bg-img">
                <Flex className="hero-text">
                    <h1>SALE!</h1>
                    <h2>UP TO 70%</h2>
                    <Link to="/Products" className="hero-link">Products</Link>
                </Flex>
            </Box>
            <Grid templateColumns="1fr 1fr">
                {response.map((item) =>{

                })}
            </Grid>
        </HomeStyled>
    )
}

export default Home
