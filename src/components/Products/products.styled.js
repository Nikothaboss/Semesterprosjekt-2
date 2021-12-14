import { Flex } from "@chakra-ui/layout"
import styled from "styled-components"
import { colors } from "../../app.styled"
import { Box } from "@chakra-ui/layout"
import { motion } from "framer-motion"

export const ProductsStyled = styled(motion(Box)) `

    .products-grid{
        padding: 20px 0;
        max-width: 1100px;
        margin: auto;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`

export const DetailsStyled = styled(Flex) `
    /* border: 1px solid white; */
    max-width: 1100px;
    margin: auto;
    /* background: #f2f2f2; */
    color: ${colors.darkBlue};
    align-items: center;
    min-height: 90vh;

    .left{
        width: 50%;
        border: 1px solid red;
        img{
            width: 100%;
        }
    }

    .right{
        width: 50%;

    }
`