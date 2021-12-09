import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/layout'
import { AdminStyled } from "./admin.styled"
import Form from '../Forms/Form'

const Admin = () => {
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
                    <p>two!</p>
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
