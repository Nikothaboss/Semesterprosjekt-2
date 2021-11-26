import React from 'react'
import hero from "../../img/hero-bg.jpg"
import { HomeStyled } from './home.styled'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid } from '@chakra-ui/layout'
import { useFetch } from '../../utils/fetch'
import { base_url } from '../../utils/API'








 


const Home = () => {

    const {data} = useFetch(base_url + "/products")
    // console.log(data)
    

    return (
        <HomeStyled>
            <Box bgImage={`url("${hero}")`} className="bg-img">
                <Flex className="hero-text">
                    <h1>SALE!</h1>
                    <h2>UP TO 70%</h2>
                    <Link to="/Products" className="hero-link">Products</Link>
                </Flex>
            </Box>
            <Grid className="featured" maxW="1100px" m="auto" gap="1.5rem">
                {data.map((item)=>{
                   return item.featured === true && (
                        <img src={item.image_url} alt={item.title} key={item.id}/>
                        
                    )
                })}
            </Grid>
        </HomeStyled>
    )
}

export default Home
