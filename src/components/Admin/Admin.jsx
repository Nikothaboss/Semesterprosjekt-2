import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/layout'
import { AdminStyled } from "./admin.styled"
import Form from '../Forms/Form'
import { Route } from 'react-router'
import { useFetch } from '../../utils/fetch'
import { base_url } from '../../utils/API'
import EditForm from '../Forms/EditForm'

const Admin = () => {

    const {data} = useFetch(base_url + "/products")

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
                    <TabPanel>
                        {data.map(item => (
                            <Flex className="editItem">
                                <img src={item.image_url} alt={item.title} />
                            </Flex>
                        ))}
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
