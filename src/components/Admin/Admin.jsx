import EditForm from '../Forms/EditForm'
import Form from '../Forms/Form'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/layout'
import { AdminStyled } from "./admin.styled"
import { useFetch } from '../../utils/fetch'
import { base_url, editProduct } from '../../utils/API'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const Admin = () => {

    const {data} = useFetch(base_url + "/products")
    const [editFormOpen, setEditFormOpen] = useState(false)
    
    const [id, setId] = useState(null)
    const [rating, setRating] = useState(1)
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [featured, setFeatured] = useState(false)
    const [title, setTitle] = useState("")

    const MotionFlex = motion(Flex);

    const getObj = (value) =>{
        const obj = data.filter(x => {
            return x.id.toString() === value.toString() 
        })
        return obj[0]
    }


    const closeForm = () => {
        setEditFormOpen(false)
    }

    const handleClick = (e) =>{
        setEditFormOpen(!editFormOpen)
        const product = getObj(e.target.id)

        setId(e.target.id)
        setTitle(product.title)
        setDescription(product.description)
        setPrice(product.price)
        setRating(product.rating)
        setFeatured(product.featured)
        setImage(product.image_url)

        console.log(id, title, description, price, rating, featured, image)
    }

    const handleTitle = (e) => setTitle(e.target.value)
    const handlePrice = (e) => setPrice(e.target.value)
    const handleImage = (e) => setImage(e.target.value)
    const handleRange = (e) => setRating(e.target.value)
    const handleFeatured = (e) => setFeatured(!featured)
    const handleDescription = (e) => setDescription(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        editProduct(title, rating, description, price, image, featured, id )
    }


    return (
        <AdminStyled>
            <Flex w="1100px" m="auto">
                <Tabs w="100%">
                <TabList>
                    <Tab color="#f3f3f3">Create</Tab>
                    <Tab color="#f3f3f3">Edit</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Form variant="create"/>
                    </TabPanel>
                    <TabPanel position="relative">
                        <AnimatePresence >
                            {data.map(item => (
                                <MotionFlex
                                className="editItem"
                                id={item.id}
                                name={item.title}
                                onClick={handleClick}
                                display={editFormOpen ? "none" : "flex"}
                                whileHover={{scale: 1.01}}
                                whileTap={{scale: 0.99}}
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                key={item.id}
                                
                                >
                                    <img id={item.id} src={item.image_url} alt={item.title} />
                                    <Text id={item.id} fontSize=".9rem" w="200px" textAlign="center">{item.title}</Text>
                                    <Text id={item.id} fontSize=".9rem" w="200px" textAlign="center">${item.price}</Text>
                                    <Text id={item.id} fontSize=".9rem" w="200px" textAlign="center">Rating: {item.rating}</Text>
                                    <Text id={item.id} fontSize=".9rem" w="200px" textAlign="center">Featured: {item.featured ? "Yes" : "No"}</Text>
                                </MotionFlex>
                            ))}
                        </AnimatePresence>
                            <AnimatePresence exitBeforeEnter>
                                {editFormOpen && <Form variant="edit" id={id} onClick={closeForm} prodName={title}/>}
                            </AnimatePresence>
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Flex>
        </AdminStyled>
    )
}

export default Admin
