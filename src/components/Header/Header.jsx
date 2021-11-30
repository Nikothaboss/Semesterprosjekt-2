import React, { useEffect, useState, useCallback } from 'react'
import Logo from './Logo';
import { Flex, Text, Box } from '@chakra-ui/layout'
import { HeaderStyled, ModalStyled } from './header.styled'
import { MdComputer, MdAccountCircle, MdShoppingCart, MdMenu } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';
import { useResize } from '../../utils/resize';
import { AnimatePresence } from 'framer-motion';
import { useFetch } from '../../utils/fetch';
import { base_url } from '../../utils/API';








const Header = () => {
    const [inputValue, setInputValue] = useState("")
    const [filteredData, setFilteredData] = useState([])
    const {screenWidth} = useResize()
    const location = useLocation()
    const {data} = useFetch(base_url +"/products")

    
    const handleChange =(e)=>{
        const searchWord = e.target.value;
        setInputValue(searchWord)
        const newFilter = data.filter((item) => {
            return (
                item.title.toLowerCase().includes(inputValue.toLowerCase())
            )
        })

        if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
    }
    const Searchbar = () =>{
        
        console.log("searchbar rendered")
        return (
            <Flex alignItems="center" width="50%" flexDir="column" justifyContent="center">
            <input
            type="text"
            placeholder="Search"
            className="searchbar"
            onChange={handleChange}/>
            </Flex>  
        )
    }

    

    const Nav = () =>{
        console.log("nav rendered")
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

    const Modal = () =>{
    

        console.log("modal rendered")
    
        const ModalItem = ({image_url, title, price}) => {
            return(
            <Flex justifyContent="space-between" alignItems="center">
                <img src={image_url} alt={title} />
                <h4>{title}</h4>
                <Text>{price},-</Text>
            </Flex>
            )
        }

        
        
    
        return (
            <ModalStyled flexDir="column" >
                {filteredData.map((item)=>{
                return <ModalItem image_url={item.image_url} title={item.title} price={item.price} /> 
                })}
            </ModalStyled>
        )
    }


    
    
    return (
        <HeaderStyled 
        style={location.pathname === "/" ? {position: "absolute", left: 0, right: 0} : ""}>
            <Flex maxWidth="1100px" m="auto" justifyContent="space-between">
                <Logo />
                <Searchbar />
                {screenWidth > 768 ? <Nav /> : <MdMenu size="1.2rem" />}
            </Flex>
            {inputValue.trim() !== "" && <Modal />}
        </HeaderStyled>
    )
}

export default Header
