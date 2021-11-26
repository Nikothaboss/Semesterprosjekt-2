import React from 'react'
import Logo from './Logo';
import { Flex, Text } from '@chakra-ui/layout'
import { HeaderStyled } from './header.styled'
import { MdComputer, MdAccountCircle, MdShoppingCart, MdMenu } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';
import { useResize } from '../../utils/resize';

const Searchbar = () =>{
    return (
        <Flex  alignItems="center" width="50%">
            <input type="text" placeholder="Search" className="searchbar"/>
        </Flex>
    )
}

const Nav = () =>{
    const NavItem = ({icon, location=""}) =>{
        return (
        <NavLink exact to={"/" + location}>
            <Flex className="nav-item" >
                <Flex className="circle">
                    {icon}
                </Flex>
                <Text w="100%" textAlign="center">{location}</Text>
            </Flex>
        </NavLink>
        )

    }
    return (
        <Flex alignItems="center" justifyContent="space-between" width="25%">
            <NavItem icon={<MdComputer size="1.2rem"/>} location="Products"/>
            <NavItem icon={<MdAccountCircle size="1.2rem"/>} location="Login"/>
            <NavItem icon={<MdShoppingCart size="1.2rem"/>} location="Cart"/>
        </Flex>
    )
  
}

const Header = () => {
    const {screenWidth} = useResize()
    const location = useLocation()
    
    return (
        <HeaderStyled 
        style={location.pathname === "/" ? {position: "absolute", left: 0, right: 0} : ""}>
            <Flex maxWidth="1100px" m="auto" justifyContent="space-between">
                <Logo />
                <Searchbar />
                {screenWidth > 768 ? <Nav /> : <MdMenu size="1.2rem" />}
            </Flex>
        </HeaderStyled>
    )
}

export default Header
