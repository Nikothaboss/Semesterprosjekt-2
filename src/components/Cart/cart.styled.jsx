import { Box, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, device } from "../../app.styled";


export const CartStyled = styled(motion(Flex)) `
    height: 90.7vh;
    .CartMainContent {
        background: #f2f2f2;
        width: 1100px;
        color: ${colors.darkBlue};
        margin: auto;
        height: 80vh;
        align-items: center;
        flex-direction: column;
        padding: 40px;
        
        @media ${device.tablet}{
            width: 90%;
        }
    }

    .cartItem{
        /* flex-direction: row; */
        margin-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        /* @media ${device.tablet}{
            flex-direction: column;
        } */

        .prodInfo{
            flex-direction: row;
            @media ${device.tablet}{
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
        }
    }

    .buttons{
        justify-content: flex-end;
        width: 100%;
    }

    .divider{
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
    @media ${device.mobileL}{
        padding: 2px;
    }
`