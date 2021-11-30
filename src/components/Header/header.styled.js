import styled from "styled-components";
import { colors } from "../../app.styled";
import { Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";



export const HeaderStyled = styled(motion.header) `
    padding: 10px 20px;
    background: ${colors.blackOpacity};
    .searchbar{
        color: white;
        background: ${colors.blackOpacity};
        padding: .5rem 1rem;
        border: 2px solid ${colors.lightBrown};
        width: 100%;
        border-radius: 5px;
        ::placeholder{
            color: white;
            opacity: .8;
        }
    }

    .nav-item{
        flex-direction: column;
        align-items: center;
    }

    .circle{
        background: ${colors.blackOpacity};
        border-radius: 50%;
        border: 2px solid ${colors.lightBrown};
        padding: .5rem;
        justify-content: center;
        align-items: center;
    }

`

export const ModalStyled = styled(Flex) ` 
    width: 1100px;
    margin: auto;
    img{
        width: 150px;
    }
`