import styled from "styled-components";
import { Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const AdminStyled = styled(motion(Flex)) `
    min-height: 84vh;
    .editItem{
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: white;
        font-size: .7rem;
        margin: 10px 0;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;

        img{
            width: 100px;
        }
    }

`