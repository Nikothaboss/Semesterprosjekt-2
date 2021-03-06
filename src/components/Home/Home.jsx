import hero from "../../img/hero-bg.jpg"
import Loader from "../../utils/Loader"
import { HomeStyled, StyledCard } from './home.styled'
import { useFetch } from '../../utils/fetch'
import { useLocalStorage } from '../../utils/localStorage'
import { base_url } from '../../utils/API'
import { checkRating } from '../../utils/setRating'
import { colors } from '../../app.styled'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Heading, Text, Center } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { motion } from 'framer-motion'

export const FeaturedCard = ({image_url, title, id, rating, price, description, onClick}) =>{
    const MotionFlex = motion(Flex);
    const MotionButton = motion(Button)

    return (
        <StyledCard>
            <MotionFlex whileHover={{scale: 0.994}} flexDir="column" className="featuredCard" >
                <Link to={"/products/" + id}><img src={image_url} alt={title} key={id}/></Link>
                <Flex className="cardInfo">
                    <Link to={"/products/" + id}>
                        <Heading className="title">{title}</Heading>
                        <Text>{description.length > 80 ? description.substring(0, 65) + "..." : description }</Text>
                        {checkRating(rating)}
                    </Link>
                    <Flex justifyContent="space-between" alignItems="center" w="100%" >
                        <h3>${price}</h3>
                        <MotionButton id={id} whileTap={{scale: .9}} whileHover={{scale: 1.03,background: colors.orange}} onClick={onClick} bg={colors.orange} size="sm" mt="10px" color="#f2f2f2"  zIndex="999" >Add to Cart</MotionButton>
                    </Flex>
            
                </Flex>
            </MotionFlex>
        </StyledCard>
    )
}

const Home = () => {
    const {data, loading} = useFetch(base_url + "/products")
    // const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")))
    console.log("loading: ",loading)
   
    const [cart, setCart] = useLocalStorage("cart", [])

    const addToCart = (e) =>{
        
        // const product = data.filter(x => x.id.toString() === e.target.id.toString())[0]
        const product = data[data.findIndex(x => x.id.toString() === e.target.id.toString())]
        const inCart = cart.includes(JSON.stringify(product))
        // const inCart = cart.find(x => x === product)
        console.log("In Cart ?", inCart, )
        if(!inCart && product){
            cart.push(product)
            setCart(cart)
            window.localStorage.setItem("cart", JSON.stringify(cart))
            console.log("Add", cart)
        }else if(inCart && product){
            cart.splice(cart.indexOf(product), 1)
            setCart(cart)
            window.localStorage.setItem("cart", JSON.stringify(cart))
            console.log("remove", cart)
        }
        
    }
    
    return (
        <HomeStyled initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}transition={{duration: .3}}>
            <Box bgImage={`url("${hero}")`} className="bg-img">
                <Flex className="hero-text">
                    <Heading as="h1">SALE!</Heading>
                    <Heading>UP TO 70%</Heading>
                    <Link to="/Products" className="hero-link">Products</Link>
                </Flex>
            </Box>
            {loading ? <Center h="50vh"> <Loader /> </Center> : (
            <Grid className="featured" maxW="1100px" m="auto">
                {data.map((item)=>{
                   return item.featured && (
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
                    )
                })}
            </Grid>
            )}

        </HomeStyled>
    )
}

export default Home
