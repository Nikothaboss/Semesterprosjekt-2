import styled from "styled-components";
import { colors } from "../../app.styled";
export const FormStyled = styled.form `
    color: white;
    width: 60%;
    margin: auto;
    
    input, textarea{
        width: 100%;
        padding: 5px;
        color: ${colors.darkBlue};
    }

   


    #ratingInput{
        padding: 0;
        width: 80%;
        outline: none;
        margin-right: 8%;
        /* background: yellow; */
    }

    .description{
        height: 150px;
    }

    .formItem{
        margin: 10px 0;
    }
    
    .rating{
        margin-left: 5%;
    }

    .checkbox{
        width: 3%;
        margin-left: 10px;
    }

    .submitBtn{
        border: 1px solid ${colors.lightBrown};
        padding: 10px 20px;
        border-radius: 5px;
    }


`