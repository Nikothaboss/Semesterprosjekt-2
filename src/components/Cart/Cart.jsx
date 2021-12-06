import { CartStyled } from './cart.styled'
import React from 'react'
import { Flex, Heading, Box, Text } from '@chakra-ui/layout'
import Button from './Button'
import { colors } from '../../app.styled'
import { MdClose } from 'react-icons/md'

const Cart = () => {
    const cart = JSON.parse(window.localStorage.getItem("cart"))
    const uniqueProducts = cart.filter((product, index) =>{
        const _product = JSON.stringify(product)
        return index === cart.findIndex(obj => {
            return JSON.stringify(obj) === _product
        })
    })
    console.log(uniqueProducts)
    return (
        <CartStyled>
            <Flex className="CartMainContent">
                <Flex className="buttons">
                    <Button
                    linkTo="Products" 
                    buttonText="Continue Shopping" 
                    padding="1.2rem"
                    bg={colors.orange}
                    border={"3px solid " + colors.darkBrown}
                    color="#f2f2f2"
                    />
                </Flex>
                <Heading w="100%" textAlign="left" as="h1">Cart</Heading>
                <div className="devider"></div>
                <Flex justifyContent="flex-end" w="100%">
                    <Flex justifyContent="space-between" w="50%">
                        <Heading fontSize="1.2rem">Quantity</Heading>
                        <Heading fontSize="1.2rem">Price</Heading>
                        <Heading fontSize="1.2rem">Remove</Heading>
                    </Flex>
                </Flex>
                <div className="devider"></div>
                <Flex className="products" flexDir="column" w="100%">
                    {uniqueProducts.map((product) =>(
                        <Flex justifyContent="space-between">
                            <Flex>
                                <img src={product.image_url} alt={product.title} />
                                <Heading />
                                
                            </Flex>
                            <Flex width="50%" justifyContent="space-between" alignItems="center">
                                <Text w="33%">PlaceHolder</Text>
                                <Text w="33%">${product.price}</Text>
                                <MdClose />
                            </Flex>

                        </Flex>
                    ))}
                </Flex>
            </Flex>
            
        </CartStyled>
    )
}

export default Cart
