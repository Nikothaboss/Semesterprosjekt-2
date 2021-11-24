import styled from "styled-components";
import { Box } from "@chakra-ui/layout";
import { colors, fonts } from "../../app.styled";


export const HomeStyled = styled(Box)`
    .bg-img{
        height: 62vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-bottom: 3px solid ${colors.darkBrown};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .hero-text{
            padding: 30px;
            border-radius: 5px;
            background: ${colors.blackOpacity};
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            transform: translateY(20px);

            h1, h2{ 
            font-size: 48px;
            font-family: ${fonts.poppins};
            font-weight: 600;
            text-shadow: 0px 2px ${colors.blackOpacity}, 0px 4px ${colors.blackOpacity}, 0px 6px ${colors.blackOpacity};
        }

        }



        h2{
            color: ${colors.orange}
        }

        h1{
            color: ${colors.lightBrown}
        }

        .hero-link{
            background: ${colors.lightBlue};
            font-size: 24px;
            padding: 10px;
            border-radius: 5px;
            width: 100%;
            text-align: center;
        }
    }
    
    
`