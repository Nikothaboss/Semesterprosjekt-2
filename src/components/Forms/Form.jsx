import React, { useState } from 'react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import { FormStyled } from "./form.styled"
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { colors } from '../../app.styled'
import { base_url,  } from '../../utils/API'
import { useLocalStorage } from '../../utils/localStorage'

const Form = ({variant, id, onClick, prodName, prodRate, prodDescription, prodPrice, prodImage, prodFeatured}) => {
    
    const [token] = useLocalStorage("token")

    const [rating, setRating] = useState(prodRate || 1)
    const [description, setDescription] = useState(prodDescription || "")
    const [price, setPrice] = useState(prodPrice || 0)
    const [image, setImage] = useState(prodImage || "")
    const [featured, setFeatured] = useState(prodFeatured || false)
    const [title, setTitle] = useState(prodName || "")

    const editProduct = async () => {
        const url = base_url + "/products/" + id
        const body = JSON.stringify({title: title, rating: rating, description: description, price: price, image_url: image, featured: featured,})
        const request = {
            method: "PUT",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        }
        try{
            const res = await fetch(url, request)
            const data = await res.json()
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }
    
    const addProduct = async () =>{
        const url = base_url + "/products"    
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

    const deleteProduct = async () =>{
        const url = base_url + "/products/" + id
        console.log(url)
        const request = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
        try{
            const res = await fetch(url, request)
            const data = await res.json()
            console.log(data)
        }catch{

        }
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        variant === "create" && addProduct() || variant === "edit" && editProduct()
        setTimeout(()=>{
            window.location.href = "/Admin"

        }, 100)
    }

    const handleDelete = () => {
        const doDelete = window.confirm("Are you sure you want to delete this product?")
        console.log(doDelete)

        if(doDelete){
            deleteProduct()
            setTimeout(()=>{
                window.location.href = "/Admin"

            }, 100)
        }
    }


    return (
        <Flex flexDir="column" bg={colors.blackOpacity} p="2.2rem 0rem">
            <FormStyled onSubmit={handleSubmit}>
                    <Flex justifyContent="space-between">
                        <Heading fontSize="1.2rem">{variant === "create" ? "Create New Product" : prodName}</Heading>
                        {variant === "edit" && <Text onClick={onClick} textDecor="underline" cursor="pointer">Back to products</Text>}
                    </Flex>
                    <FormControl id="title" className="formItem">
                        <FormLabel>Title</FormLabel>
                        <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} />
                    </FormControl>

                    <FormControl id="price" className="formItem">
                        <FormLabel>Price</FormLabel>
                        <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
                    </FormControl>

                    <Flex justifyContent="space-between" w="100%">
                        <FormControl id="image_url" className="formItem">
                            <FormLabel>Image</FormLabel>
                            <input type="text" value={image} onChange={e => setImage(e.target.value)} />
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
                        <textarea className="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </FormControl>

                    <FormControl id="featured" className="formItem">
                        <Flex alignItems="center" justifyContent="flex-start">
                            <FormLabel m="0" >Featured</FormLabel>
                            <input type="checkbox" className="checkbox" checked={featured} onChange={() => setFeatured(!featured)} />
                        </Flex>
                    </FormControl>



                    <Flex justifyContent="space-between">
                        <button type="submit" className="submitBtn">{variant === "create" ? "Add" : "Edit"}</button>
                        {variant === "edit" && <button type="button" className="deleteBtn" onClick={handleDelete}>Delete</button>}
                    </Flex>
            
            </FormStyled>
        </Flex>
    )
}

export default Form
