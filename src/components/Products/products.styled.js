import styled from "styled-components"

export const ProductsStyled = styled.div `

    .products-grid{
        padding: 20px 0;
        max-width: 1100px;
        margin: auto;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`