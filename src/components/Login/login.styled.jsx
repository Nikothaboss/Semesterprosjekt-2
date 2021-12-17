import styled from "styled-components";
import { Flex } from "@chakra-ui/layout";
import { colors } from "../../app.styled";

export const LoginStyled = styled.form `
    height: 90.7vh;
    display: flex;
    .formContainer{
        height: 80vh;
        width: 1100px;
        margin: auto;
        background: ${colors.blackOpacity};

        button{
            padding: 10px 20px;
            border: 1px solid ${colors.orange};
            margin-top: 20px;
            border-radius: 5px;
            color: #f3f3f3
        }
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