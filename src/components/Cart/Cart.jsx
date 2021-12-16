import Button from './Button'
import { CartStyled } from './cart.styled'
import { useState } from 'react'
import { Flex, Heading, Text, Center, HStack } from '@chakra-ui/layout'
import { colors } from '../../app.styled'
import { MdClose } from 'react-icons/md'
import { useLocalStorage } from '../../utils/localStorage'

const Cart = () => {
    const [cart, setCart] = useLocalStorage("cart", [])
    const uniqueProducts = cart.filter((product, index) =>{
        const _product = JSON.stringify(product)
        return index === cart.findIndex(obj => {
            return JSON.stringify(obj) === _product
        })
    })

    const [uniqueProd, setUniqueProd] = useState(uniqueProducts)

    const handleDelete = (e) =>{
        const product = uniqueProd[uniqueProd.findIndex(x => x.id.toString() === e.target.id.toString())]
        uniqueProd.splice((uniqueProd.indexOf(product)), 1)
        setUniqueProd(uniqueProd)
        const newCart = cart.filter((item)=>{
            return item.id.toString() !== e.target.id.toString()
        })
        setCart(newCart)
    }

    const sumTotal = () =>{
        const total = uniqueProd.map(product => {
            return product.price * cart.filter(item => item.title === product.title).length
        })
        console.log(total)
        if(total.length === 0){
            return 0
        }else{
            const reducer = (accumulator, curr) => accumulator + curr;
            return total.reduce(reducer)
        }

    }
   
    return (
        <CartStyled initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}transition={{duration: .3}}>
            <Flex className="CartMainContent">

                <Heading w="100%" textAlign="left" as="h1" fontSize="1.7rem">Cart</Heading>
                <div className="divider"></div>
                <Flex className="products" flexDir="column" w="100%" overflow="scroll">
                    {uniqueProd.map((product) =>(
                        <Flex justifyContent="space-between" key={product.id} className="cartItem">
                            <Flex alignItems="center">
                                <img src={product.image_url} alt={product.title} />
                                <Heading fontSize="1rem" ml="1rem" w="15rem">{product.title}</Heading>

                            </Flex>
                            <Flex width="50%" justifyContent="space-between" alignItems="center" className="prodInfo">
                                <Center w="100px">
                                    <Text textAlign="center">Quantity: {cart.filter(item =>item.title === product.title).length}</Text>
                                </Center>
                                <Text w="3rem">${Math.floor(cart.filter(item =>item.title === product.title).length * product.price)}</Text>
                                <Center w="16.3%" cursor="pointer" id={product.id} onClick={handleDelete} zIndex="9999999" bg="red" >
                                    <MdClose size="1.2rem"  />
                                </Center>
                            </Flex>

                        </Flex>
                    ))}
                </Flex>
                <div className="divider"></div>
                    <HStack w="100%" >
                        <Text fontSize="1.3rem">Sum: ${Math.floor(parseInt(sumTotal()))}</Text>
                        <Flex className="buttons">
                            <Button
                            linkTo="Products" 
                            buttonText="Continue Shopping" 
                            padding=".7rem 1.2rem"
                            bg={colors.orange}
                            border={"3px solid " + colors.darkBrown}
                            color="#f2f2f2"
                            />
                        </Flex>
                    </HStack>
            </Flex>

            
        </CartStyled>
    )
}

export default Cart
