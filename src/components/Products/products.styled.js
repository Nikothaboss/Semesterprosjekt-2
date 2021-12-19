import { Flex } from "@chakra-ui/layout"
import styled from "styled-components"
import { colors, device } from "../../app.styled"
import { Box } from "@chakra-ui/layout"
import { motion } from "framer-motion"

export const ProductsStyled = styled(motion(Box)) `

    .products-grid{
        padding: 20px 0;
        max-width: 1100px;
        margin: auto;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        @media ${device.laptop}{
            padding: 20px;
        }
    }
`

export const DetailsStyled = styled(motion(Flex)) `
    max-width: 1100px;
    margin: auto;
    color: ${colors.darkBlue};
    align-items: center;
    min-height: 90vh;

    .detailsContainer{
        @media ${device.laptop}{
            flex-direction: column;
            width: 50%;
            margin: auto;
        }
        @media ${device.tablet}{
            width: 70%;
        }
        @media ${device.mobileM}{
            width: 90%;
        }
    }



    .left{
        width: 50%;

        @media ${device.laptop}{
            width: 100%;
        }

        img{
            width: 100%;
        }
    }

    .right{
        width: 50%;
        justify-content: space-between;
        padding: 30px 20px;

        @media ${device.laptop}{
            width: 100%;
            padding: 10px 20px;
            height: 100%;
        }

        h1{
            font-weight: 600;
            font-size: 1.3rem;
            margin: 10px 0;
        }

        h2{
            font-weight: 700;
            margin: 10px 0;
            font-size: 1.2rem;
        }

    }
`