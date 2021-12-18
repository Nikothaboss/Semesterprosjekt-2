import styled from "styled-components";
import { colors, device } from "../../app.styled";
import { Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const HeaderStyled = styled(motion.header) `
    padding: 10px 20px;
    background: ${colors.blackOpacity};
    color: #f2f2f2;

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
    width: 100%;
    margin: auto;
    align-items: center;

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


    .dataResults{
        position: absolute;
        /* left: 0; */
        right: 0;
        /* border: 1px solid red; */
        margin-top: 70px;
        background: ${colors.darkBlue};
        z-index: 999999999999999999999999999999;
        width: 100%;

        @media ${device.tablet}{
            margin-top: 60px;
        }
    }
    img{
        width: 150px;
        @media ${device.tablet}{
            width: 100px;
        }
    }
`

export const DataItemStyled = styled(Flex) `
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    width: 50%;
    margin: 2px auto;
    @media ${device.tablet}{
            width: 90%
        }

    &:hover{
        border-bottom: 1px solid ${colors.lightBrown};
        border-top: 1px solid ${colors.lightBrown};
    }

    h4, p{
        padding: 0 20px;
        @media ${device.tablet}{
            font-size: .9rem
        }
    }




`