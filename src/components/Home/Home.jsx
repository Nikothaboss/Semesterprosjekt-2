import React, { useState } from 'react'
import hero from "../../img/hero-bg.jpg"
import { HomeStyled, StyledCard } from './home.styled'
import { useFetch } from '../../utils/fetch'
import { useLocalStorage } from '../../utils/localStorage'
import { base_url } from '../../utils/API'
import { checkRating } from '../../utils/setRating'
import { colors } from '../../app.styled'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { motion } from 'framer-motion'
import { MdShoppingCart } from 'react-icons/md'
// import { containsObject } from '../../utils/addToCart'
// import { addToCart } from '../../utils/addToCart'

export const FeaturedCard = ({image_url, title, id, rating, price, description, onClick}) =>{
    const MotionFlex = motion(Flex);

    return (
        <StyledCard>
            <MotionFlex whileHover={{scale: 1.01}} flexDir="column" className="featuredCard" >
                <img src={image_url} alt={title} key={id}/>
                <Flex className="cardInfo">
                    <Heading className="title">{title}</Heading>
                    <Text>{description.length > 80 ? description.substring(0, 65) + "..." : description }</Text>
                    {checkRating(rating)}
            
                    <Flex justifyContent="space-between" alignItems="center" w="100%" >
                        {/* {inStock ? <Text as="span">In Stock</Text> : <Text as="span">Out of Stock</Text> } */}
                        <h3>${price}</h3>
            
                        <Button id={id} onClick={onClick} bg={colors.orange} size="sm" mt="10px" color="#f2f2f2" rightIcon={<MdShoppingCart />} zIndex="999" >Add</Button>
                    </Flex>
            
                </Flex>
            </MotionFlex>
        </StyledCard>
    )
}

const Home = () => {
    const {data} = useFetch(base_url + "/products")
    // const [cart, setCart] = useState([])
    const [cart, setCart] = useLocalStorage("cart", [])

    
    
    const addToCart = (e) =>{
        const product = data.filter(x => x.id.toString() === e.target.id.toString())[0]
        const inCart = cart.includes(product)
        console.log("In Cart ?", inCart)
        if(!inCart){
            cart.push(product)
            setCart(cart)
            console.log("Add", cart)
        }else{
            cart.splice(cart.indexOf(product), 1)
            setCart(cart)
            console.log("remove", cart)
        }
        
    }

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
                   return item.featured && (
                        // <Link to={"/Products" + "/" + item.id}>
                            <FeaturedCard
                            image_url={item.image_url}
                            title={item.title}
                            id={item.id}
                            price={item.price}
                            description={item.description}
                            rating={item.rating}
                            key={item.id}
                            onClick={addToCart}
                            />
                        // </Link>
                        
                    )
                })}
            </Grid>
        </HomeStyled>
    )
}

export default Home
