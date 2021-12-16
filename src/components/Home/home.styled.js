import styled from "styled-components";
import { Box } from "@chakra-ui/layout";
import { colors, device, fonts } from "../../app.styled";
import { motion } from "framer-motion";
export const HomeStyled = styled(motion(Box))`
    .bg-img{
        height: 50vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-bottom: 3px solid ${colors.darkBrown};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .hero-text{
            height: 85%;
            width: 40%;
            padding: 30px;
            border-radius: 5px;
            background: ${colors.blackOpacity};
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            /* transform: translateY(30px); */

            @media ${device.tablet}{
                    width: 65%;
                }

            h2{
                color: ${colors.orange};
                font-size: 48px;

                @media ${device.laptop}{
                    font-size: 36px;
                }

                @media ${device.tablet}{
                    font-size: 40px;
                }
  
                @media ${device.mobileL}{
                    font-size: 32px;
                }

                @media ${device.mobileM}{
                    font-size: 28px;
                }
            }

            h1{
                color: ${colors.lightBrown};
                font-size: 80px;

                @media ${device.laptop}{
                font-size: 68px;
                }

                @media ${device.tablet}{
                font-size: 54px;
                }
            }

            h1, h2{ 
            /* font-size: 60px; */
            font-family: ${fonts.poppins};
            font-weight: 600;
            /* text-shadow: 0px 2px ${colors.blackOpacity}, 0px 4px ${colors.blackOpacity}, 0px 6px ${colors.blackOpacity}; */
            }

        }



        .hero-link{
            background: ${colors.lightBlue};
            font-size: 24px;
            padding: 10px;
            border-radius: 5px;
            width: 60%;
            text-align: center;

            @media ${device.tablet}{
                    padding: 5px
            }

            @media ${device.mobileL}{
                    font-size: 18px;
            }
        }


    }

    .featured{
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            margin-top: 20px;
            margin-bottom: 20px;
            cursor: pointer;
            padding: 20px;

    

        }


`

export const StyledCard = styled(Box)`
    .featuredCard{
    align-items: center;
    border: 1px solid white;
    &:hover{
        border: 1px solid black
    }



    .cardInfo {
        height: 243px;
        background: #f2f2f2;
        padding: 1rem;
        color: #3d3d3d;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        /* *{
            margin-bottom: 7px;
        } */


        .title{
            font-size: 18px;
            margin-bottom: 10px;
        }

        p{
            font-size: 16px;
            margin-bottom: 10px;
        } 
    }


    }
`