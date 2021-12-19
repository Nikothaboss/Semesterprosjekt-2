import React from 'react'
import { Link } from 'react-router-dom'
import { BtnStyled } from './cart.styled'

const Button = ({linkTo, buttonText, bg, border, color}) => {
    return (
        <BtnStyled className="button-container" color={color} bg={bg} border={border}>
            <Link to={"/" + linkTo}>{buttonText}</Link>
        </BtnStyled>
    )
}

export default Button
