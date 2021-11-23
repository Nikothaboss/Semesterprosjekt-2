import styled from "styled-components";
import { colors } from "../../app.styled";

export const HeaderStyled = styled.header `
    padding: 20px;
    background: ${colors.blackOpacity};
    .searchbar{
        color: white;
        background: ${colors.blackOpacity};
        padding: .5rem 1rem;
        border: 2px solid ${colors.lightBrown};
        width: 100%;
        border-radius: 5px;
        ::placeholder{
            color:  white;
        }
    }

    .circle{
        background: ${colors.blackOpacity};
        border-radius: 50%;
        border: 2px solid ${colors.lightBrown};
        padding: 15px;
    }

`