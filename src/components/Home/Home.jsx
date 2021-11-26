import React from 'react'
import hero from "../../img/hero-bg.jpg"
import { HomeStyled } from './home.styled'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Heading, Text, HStack } from '@chakra-ui/layout'
import { useFetch } from '../../utils/fetch'
import { base_url } from '../../utils/API'
import { MdStar, MdStarOutline } from 'react-icons/md'

const FeaturedCard = ({image_url, title, id, rating, inStock, description}) =>{

    const checkRating = (rating) => {
        switch(rating) {
            case 0:
                return (
                    <HStack>
                        <MdStarOutline />
                        <MdStarOutline />
                        <MdStarOutline />
                        <MdStarOutline />
                        <MdStarOutline />
                    </HStack>
                )
            case 1: 
                    return (
                        <HStack>
                        <MdStar />
                        <MdStarOutline />
                        <MdStarOutline />
                        <MdStarOutline />
                        <MdStarOutline />
                    </HStack>
                    )
            case 2: 
                    return (
                        <HStack>
                        <MdStar />
                        <MdStar />
                        <MdStarOutline />
                        <MdStarOutline />
                        <MdStarOutline />
                    </HStack>
                    )
            case 3: 
                    return (
                        <HStack>
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStarOutline />
                        <MdStarOutline />
                    </HStack>
                    )
            case 4: 
                    return (
                        <HStack>
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStarOutline />
                    </HStack>
                    )
            case 5: 
                    return (
                        <HStack>
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                    </HStack>
                    )
        }
    }
    return (
        <Flex flexDir="column" className="featuredCard" >
            <img src={image_url} alt={title} key={id}/>
            <Flex className="cardInfo">
                <Heading className="title">{title}</Heading>
                <Text>{description}</Text>
                {checkRating(rating)}
                {inStock ? <Text as="span">In Stock</Text> : <Text as="span">Out of Stock</Text> }

            </Flex>
        </Flex>
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
                        />
                        
                    )
                })}
            </Grid>
        </HomeStyled>
    )
}

export default Home
