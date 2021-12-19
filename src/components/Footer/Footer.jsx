import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { colors } from '../../app.styled'

const Footer = () => {
    return (
        <Flex w="100%" justifyContent="center" alignItems="center" bg={colors.blackOpacity} p="1.2rem">
            <Text color="#f3f3f3">Copyright &copy; 2021</Text>
        </Flex>
    )
}

export default Footer
