import React from 'react'
import hero from "../../img/hero-bg.jpg"
import { HomeStyled } from './home.styled'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout'
import { useFetch } from '../../utils/fetch'
import { base_url } from '../../utils/API'
import { checkRating } from '../../utils/setRating'
import { motion } from 'framer-motion'
import { Button } from '@chakra-ui/button'
import { colors } from '../../app.styled'

const FeaturedCard = ({image_url, title, id, rating, inStock, description}) =>{
    const MotionFlex = motion(Flex);

    return (
        <MotionFlex whileHover={{scale: 1.01}} flexDir="column" className="featuredCard" >
            <img src={image_url} alt={title} key={id}/>
            <Flex className="cardInfo">
                <Heading className="title">{title}</Heading>
                <Text>{description.length > 90 ? description.substring(0, 65) + "..." : description }</Text>
                {checkRating(rating)}
                
                <Flex justifyContent="space-between" alignItems="center" w="100%">
                    {inStock ? <Text as="span">In Stock</Text> : <Text as="span">Out of Stock</Text> }
                    
                    <Button bg={colors.orange} size="sm" color="#f2f2f2">Add to Cart</Button>
                </Flex>
                

            </Flex>
        </MotionFlex>
    )
}

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
            <Grid className="featured" maxW="1100px" m="auto">
                {data.map((item)=>{
                   return item.featured === true && (
                        <FeaturedCard 
                        image_url={item.image_url} 
                        title={item.title} 
                        id={item.id} 
                        inStock={item.inStock}
                        description={item.description}
                        rating={item.rating}
                        key={item.id}
                        />
                        
                    )
                })}
            </Grid>
        </HomeStyled>
    )
}

export default Home
