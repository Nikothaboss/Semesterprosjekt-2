import React from 'react'
import { Link } from 'react-router-dom'
import { BtnStyled } from './cart.styled'

const Button = ({linkTo, buttonText, padding, bg, border, color}) => {
    return (
        <BtnStyled className="button-container" color={color} p={padding} bg={bg} border={border}>
            <Link to={"/" + linkTo}>{buttonText}</Link>
        </BtnStyled>
    )
}

export default Button
