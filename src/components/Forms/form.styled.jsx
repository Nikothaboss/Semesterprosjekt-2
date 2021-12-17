import styled from "styled-components";
import { colors, device } from "../../app.styled";
export const FormStyled = styled.form `
    color: white;
    width: 60%;
    margin: auto;
    @media ${device.tablet}{
        width: 80%;
    }
    
    input, textarea{
        width: 100%;
        padding: 5px;
        color: ${colors.darkBlue};
    }

    .imageAndRating{
        @media ${device.mobileL}{
            flex-direction: column;
        }
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
        padding: 0;
        
    }

    .image{
        margin-right: 9px;
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

    .deleteBtn{
        background: red;
        padding: 10px 20px;
        border-radius: 5px;
    }


`