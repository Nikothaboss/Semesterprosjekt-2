import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import { FormStyled } from "./form.styled"
import { Flex, Text, Heading } from '@chakra-ui/layout'
import { colors } from '../../app.styled'
import { useLocalStorage } from '../../utils/localStorage'
import { motion } from 'framer-motion'
import { base_url } from '../../utils/API'

const EditForm = ({onClick, prodName, handleSubmit, handleTitle, handlePrice, handleImage, handleRange, handleFeatured, handleDescription }) => {
    console.log("edit form rende")
    
    // const {data} = useFetch(url)
    


    const MotionFlex = motion(Flex)




    return (
        <MotionFlex 
        flexDir="column" 
        bg={colors.blackOpacity} 
        p="2.2rem 0rem" 
        position="absolute" 
        top="0" 
        left="0" 
        w="100%"
        initial={{scale: 0,}}
        animate={{scale: 1, }}
        exit={{ opacity: 0, scale: 0}}
        transition={{duration: .3}}
        
        >
            <FormStyled onSubmit={handleSubmit} >
                    <Flex justifyContent="space-between">
                        <Heading fontSize="1.2rem">{prodName}</Heading>
                        <Text onClick={onClick} textDecor="underline" cursor="pointer">Back to products</Text>
                    </Flex>
                    <FormControl id="title" className="formItem">
                        <FormLabel>Title</FormLabel>
                        <input type="text" onChange={handleTitle}  />
                    </FormControl>

                    <FormControl id="price" className="formItem">
                        <FormLabel>Price</FormLabel>
                        <input type="text" onChange={handlePrice}  />
                    </FormControl>

                    <Flex justifyContent="space-between" w="100%">
                        <FormControl id="image_url" className="formItem">
                            <FormLabel>Image</FormLabel>
                            <input type="text" onChange={handleImage}  />
                            <FormHelperText>Paste any image-url</FormHelperText>
                        </FormControl>

                        <FormControl id="rating" className="formItem rating">
                            <FormLabel>Rating</FormLabel>
                            <input type="range" min="1" max="5"  id="ratingInput" onInput={handleRange} />
                            <output></output>
                        </FormControl>
                    </Flex>

                    <FormControl id="description" className="formItem">
                        <FormLabel>Description</FormLabel>
                        <textarea className="description"  onChange={handleDescription}></textarea>
                    </FormControl>

                    <FormControl id="featured" className="formItem">
                        <Flex alignItems="center" justifyContent="flex-start">
                            <FormLabel m="0" >Featured</FormLabel>
                            <input type="checkbox" className="checkbox"  onChange={handleFeatured} />
                        </Flex>
                    </FormControl>



                    <button type="submit" className="submitBtn">Edit</button>
            
            </FormStyled>
        </MotionFlex>
    )
}

export default EditForm
