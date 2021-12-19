import { useParams } from "react-router"
import { useFetch } from "../../utils/fetch"
import { Flex,  } from "@chakra-ui/layout"
import { base_url } from "../../utils/API"
import { DetailsStyled } from "./products.styled"
import { Button } from "@chakra-ui/button"
import { colors } from "../../app.styled"
import { checkRating } from "../../utils/setRating"
import { useLocalStorage } from "../../utils/localStorage"
const ProductDetail = () => {

    const {id} = useParams()
    const {data} = useFetch(base_url + "/products/" + id)
    const [cart, setCart] = useLocalStorage("cart")
    console.log(data)

    const addToCart = () =>{
        const product = data
        cart.push(product)
        setCart(cart)
    }

    return (
        <DetailsStyled initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: .4}}}transition={{duration: .7}}>
            <Flex background="#f2f2f2" className="detailsContainer">
                <Flex flexDir="column" className="left">
                
                    <img src={data.image_url} alt={data.title} />
                
                </Flex>
                <Flex flexDir="column" className="right">
                    <h1>{data.title}</h1>
                    <h3>{data.description}</h3>
                    <h2>${data.price}</h2>
                    {checkRating(data.rating)}
                    <Button 
                    onClick={addToCart} 
                    width="50%" 
                    size="lg" 
                    m="10px 0" 
                    fontSize="1rem" 
                    background={colors.orange} 
                    id={data.id}
                    >
                        Add To Cart
                    </Button>
                
                </Flex>
            </Flex>
        </DetailsStyled>
    )
}

export default ProductDetail
