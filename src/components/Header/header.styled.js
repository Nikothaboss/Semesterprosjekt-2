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
        justify-content: flex-start;
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

export const SearchBarStyled = styled(Flex) ` 
flex-direction: column;
    width: 1100px;
    margin: auto;
    align-items: center;

    .dataResults{
        position: absolute;
        /* left: 0; */
        right: 0;
        /* border: 1px solid red; */
        margin-top: 70px;
        background: ${colors.darkBlue};
        z-index: 999999999999999999999999999999;
        width: 100%;
    }
    img{
        width: 150px;
    }
`

export const DataItemStyled = styled(Flex) `
    /* border: 1px solid red; */
    width: 50%;
    margin: 5px auto;

    h4{
        padding: 0 20px
    }


`