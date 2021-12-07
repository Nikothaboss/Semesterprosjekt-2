import { Box, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../app.styled";

export const CartStyled = styled(motion(Flex)) `
    height: 90.7vh;
    .CartMainContent {
        background: #f2f2f2;
        width: 1100px;
        color: ${colors.darkBlue};
        margin: auto;
        border: 1px solid red;
        height: 80vh;
        align-items: center;
        flex-direction: column;
        padding: 40px;
        
    }

    .buttons{
        justify-content: flex-end;
        width: 100%;
    }

    .devider{
        height: 2px;
        background: black;
        width: 100%;
        margin: 15px 0;
    }

    .products{
        img{
            width: 150px;
        }
    }
`

export const BtnStyled = styled(Box) `
    border-radius: 5px;
    font-weight: 500;
`