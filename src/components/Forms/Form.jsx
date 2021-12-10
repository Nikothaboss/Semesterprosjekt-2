import React, { useState } from 'react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import { FormStyled } from "./form.styled"
import { Flex, Center, Heading } from '@chakra-ui/layout'
import { colors } from '../../app.styled'
import { base_url } from '../../utils/API'
import { useLocalStorage } from '../../utils/localStorage'

const Form = () => {
    
    const [token] = useLocalStorage("token")

    const [rating, setRating] = useState(1)
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [featured, setFeatured] = useState(false)
    const [title, setTitle] = useState("")

    const url = base_url + "/products"
    console.log("rating: ", rating,"Description: ", description,"price", price,"image: ", image, "featured: ", featured,"title: ", title)

    const addProduct = async () =>{
        
        const body = JSON.stringify({title: title, rating: rating, description: description, price: price, image_url: image, featured: featured,})
        const request = {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        };

        try{
            const data = await fetch(url, request);
            const res = await data.json()
            console.log(res)
            
        }catch(err){
            console.log(err)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addProduct()
    }


    return (
        <Flex flexDir="column" bg={colors.blackOpacity} p="2.2rem 0rem">
            <FormStyled onSubmit={handleSubmit}>
                    <Heading>Create New Product</Heading>
                    <FormControl id="title" className="formItem">
                        <FormLabel>Title</FormLabel>
                        <input type="text" onChange={(e)=> setTitle(e.target.value)} />
                    </FormControl>

                    <FormControl id="price" className="formItem">
                        <FormLabel>Price</FormLabel>
                        <input type="text" onChange={e => setPrice(parseFloat(e.target.value))} />
                    </FormControl>

                    <Flex justifyContent="space-between" w="100%">
                        <FormControl id="image_url" className="formItem">
                            <FormLabel>Image</FormLabel>
                            <input type="text" onChange={e => setImage(e.target.value)} />
                            <FormHelperText>Paste any image-url</FormHelperText>
                        </FormControl>

                        <FormControl id="rating" className="formItem rating">
                            <FormLabel>Rating</FormLabel>
                            <input type="range" min="1" max="5" value={rating} id="ratingInput" onInput={(e)=>setRating(e.target.value)} />
                            <output>{rating}</output>
                        </FormControl>
                    </Flex>

                    <FormControl id="description" className="formItem">
                        <FormLabel>Description</FormLabel>
                        <textarea className="description" onChange={e => setDescription(e.target.value)}></textarea>
                    </FormControl>

                    <FormControl id="featured" className="formItem">
                        <Flex alignItems="center" justifyContent="flex-start">
                            <FormLabel m="0" >Featured</FormLabel>
                            <input type="checkbox" className="checkbox" checked={featured} onChange={() => setFeatured(!featured)} />
                        </Flex>
                    </FormControl>



                    <button type="submit" className="submitBtn">Add</button>
            
            </FormStyled>
        </Flex>
    )
}

export default Form
