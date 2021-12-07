import {useFetch} from "../../utils/fetch"
import { base_url } from "../../utils/API"
import { ProductsStyled } from "./products.styled"
import { Grid } from "@chakra-ui/layout"
import { FeaturedCard } from "../Home/Home"
import { Link } from "react-router-dom"
import { useLocalStorage } from "../../utils/localStorage"
const Products = () => {
    const [cart, setCart] = useLocalStorage("cart", localStorage.getItem("cart") || [])
    const {data} = useFetch(base_url + "/Products")
    const addToCart = (e) =>{
        // const product = data[data.findIndex(x => x.id.toString() === e.target.id.toString())]
        // const inCart = cart.find(x => x === product)
        const product = data.filter(x => x.id.toString() === e.target.id.toString())[0]
        const inCart = cart.includes(product)
        console.log("In Cart ?", inCart, )
        if(!inCart && product){
            cart.push(product)
            setCart(cart)
            console.log("Add", cart)
        }else if(inCart && product){
            cart.splice(cart.indexOf(product), 1)
            setCart(cart)
            console.log("remove", cart)
        }
        
    }
    return (
        <ProductsStyled>
            <Grid className="products-grid">
                {data.map((item) =>{
                    return(                         
                    
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
        </ProductsStyled>
    )
}

export default Products
