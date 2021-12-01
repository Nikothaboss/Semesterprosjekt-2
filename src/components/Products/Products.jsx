import {useFetch} from "../../utils/fetch"
import { base_url } from "../../utils/API"
import { ProductsStyled } from "./products.styled"
import { Grid } from "@chakra-ui/layout"
import { FeaturedCard } from "../Home/Home"
import { Link } from "react-router-dom"
const Products = () => {
    const {data} = useFetch(base_url + "/Products")
    return (
        <ProductsStyled>
            <Grid className="products-grid">
                {data.map((item) =>{
                    return(                         
                    <Link to={"/Products/" + item.id}>
                        <FeaturedCard
                        image_url={item.image_url}
                        title={item.title}
                        id={item.id}
                        price={item.price}
                        description={item.description}
                        rating={item.rating}
                        key={item.id}
                        />
                    </Link>)
                })}
            </Grid>
        </ProductsStyled>
    )
}

export default Products
