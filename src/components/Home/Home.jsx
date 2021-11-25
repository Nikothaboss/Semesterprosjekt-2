import React, { useEffect, useState, useCallback } from 'react'
import hero from "../../img/hero-bg.jpg"
import { HomeStyled } from './home.styled'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid } from '@chakra-ui/layout'
// import { useFetch } from '../../utils/fetch'
// import { useFetch } from '../../utils/fetch'

const url = "https://sp2-database.herokuapp.com/products"





 


const Home = () => {
    const [products, setProducts] = useState([])

    const getItems = useCallback(async() =>{
    
        try{
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
            console.log(products)
            
        }catch{
            console.log("bruh")
        }
    }, [products])

    useEffect(()=>{
        getItems()
    }, [])

    

    return (
        <HomeStyled>
            <Box bgImage={`url("${hero}")`} className="bg-img">
                <Flex className="hero-text">
                    <h1>SALE!</h1>
                    <h2>UP TO 70%</h2>
                    <Link to="/Products" className="hero-link">Products</Link>
                </Flex>
            </Box>
            <Grid templateColumns="1fr 1fr 1fr">
            {products.map((item => {
                console.log(item.image_url)
                return <img src={"https://sp2-database.herokuapp.com/products"+ item.image} alt={item.title} key={item.id}/>
            }))}
            </Grid>
        </HomeStyled>
    )
}

export default Home
