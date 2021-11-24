import React from 'react'
import { HomeStyled } from './home.styled'
import hero from "../../img/hero-bg.jpg"
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/layout'

const Home = () => {
    return (
        <HomeStyled>
            <Box bgImage={`url("${hero}")`} className="bg-img">
                <h1>SALE!</h1>
                <h2>UP TO 70%</h2>
                <Link to="/Products">Products</Link>
            </Box>

        </HomeStyled>
    )
}

export default Home
