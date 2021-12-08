import styled from "styled-components";
import { Flex } from "@chakra-ui/layout";
import { colors } from "../../app.styled";

export const LoginStyled = styled(Flex) `
    height: 90.7vh;
    .formContainer{
        height: 80vh;
        width: 1100px;
        margin: auto;
        background: ${colors.blackOpacity};
        border: 1px solid ${colors.darkBrown};

    }

`

export const FormStyled = styled(Flex) `
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.blackOpacity};
    padding: 1.5rem;
    border-radius: .2rem;

    .formItem{
        margin-bottom: 1rem;
    }

`