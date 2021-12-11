import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/layout'
import { AdminStyled } from "./admin.styled"
import Form from '../Forms/Form'
import { useFetch } from '../../utils/fetch'
import { base_url } from '../../utils/API'
import EditForm from '../Forms/EditForm'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Admin = () => {

    const {data} = useFetch(base_url + "/products")
    const [editFormOpen, setEditFormOpen] = useState(false)
    const [id, setId] = useState(null)
    const [title, setTitle] = useState("")
    const MotionFlex = motion(Flex);

    const closeForm = () => {
        setEditFormOpen(false)
    }

    const handleClick = (e) =>{
        setEditFormOpen(!editFormOpen)
        setId(e.target.id)
        setTitle(()=>{
           const title = data.filter(item => {
                return item.id.toString() === e.target.id.toString()
            })
            return title[0].title
        })
        console.log(id, title, (data.filter(item =>{
            return item.id.toString() === e.target.id.toString()
        })))
    }

    return (
        <AdminStyled>
            <Flex w="1100px" m="auto">
                <Tabs w="100%">
                <TabList>
                    <Tab color="#f3f3f3">Create</Tab>
                    <Tab color="#f3f3f3">Edit</Tab>
                    <Tab color="#f3f3f3">Delete</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Form />
                    </TabPanel>
                    <TabPanel position="relative">
                        <AnimatePresence exitBeforeEnter>
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
                                    <img name={item.title} id={item.id} src={item.image_url} alt={item.title} />
                                    <Text name={item.title} id={item.id} fontSize=".9rem" w="200px" textAlign="center">{item.title}</Text>
                                    <Text name={item.title} id={item.id} fontSize=".9rem" w="200px" textAlign="center">${item.price}</Text>
                                    <Text name={item.title} id={item.id} fontSize=".9rem" w="200px" textAlign="center">Rating: {item.rating}</Text>
                                    <Text name={item.title} id={item.id} fontSize=".9rem" w="200px" textAlign="center">Featured: {item.featured ? "Yes" : "No"}</Text>
                                </MotionFlex>
                            ))}
                        </AnimatePresence>
                            <AnimatePresence exitBeforeEnter>
                                {editFormOpen && <EditForm prodName={title} onClick={closeForm} />}
                            </AnimatePresence>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Flex>
        </AdminStyled>
    )
}

export default Admin
