import Logo from './Logo';
import SearchBar from './SearchBar';
import Burger from './Burger';
import { useState } from 'react';
import { Center, Flex, Text } from '@chakra-ui/layout'
import { HeaderStyled } from './header.styled'
import { MdComputer, MdAccountCircle, MdShoppingCart, MdMenu, MdLogout } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';
import { useResize } from '../../utils/resize';
import { useFetch } from '../../utils/fetch';
import { base_url } from '../../utils/API';
import { useLocalStorage } from '../../utils/localStorage';
import { Link } from 'react-router-dom';
import { colors } from '../../app.styled';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const location = useLocation()
    const {screenWidth} = useResize()
    const {data} = useFetch(base_url +"/products")
    const [token] = useLocalStorage("token")
    const [user] = useLocalStorage("user", "")

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu =()=> setShowMenu(!showMenu)

    const MotionCenter = motion(Center)

    const logOut = () =>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.href = location.pathname
    }

    const Nav = () =>{
        const NavItem = ({icon, href="", text, onClick}) =>{
            return (
            <NavLink exact={true} to={href}>
                <Flex className="nav-item" onClick={onClick} >
                    <Flex className="circle">
                        {icon}
                    </Flex>
                    <Text w="100%" textAlign="center">{text}</Text>
                </Flex>
            </NavLink>
            )
    
        }


        return (
            <Flex alignItems="flext-start" justifyContent="space-between" width="37%">
                <NavItem icon={<MdComputer size="1.2rem"/>} href="/Products" text="Products" />
                <NavItem icon={<MdAccountCircle size="1.2rem"/>} href={user.username && token ? "/Admin" : "/Login"} text={user.username && token ? "Admin" : "Login"} />
                <NavItem icon={<MdShoppingCart size="1.2rem"/>} href="/Cart" text="Cart" />
                {user.username && token && <NavItem icon={<MdLogout size="1.2rem"/>} text="Logout" href={location} onClick={logOut} />}
            </Flex>
        )
      
    }
        
    return (
        <HeaderStyled >
            <Flex maxWidth="1100px" m="auto" justifyContent="space-between" alignItems="center">
                <Logo />
                <SearchBar data={data} />
                {screenWidth > 768 ? <Nav /> : <Burger showMenu={showMenu} toggleMenu={toggleMenu} />}
            </Flex>
            <AnimatePresence>
                {showMenu && (
                    <MotionCenter 
                    className="hamburgerMenu"
                    zIndex="9999"
                    flexDir="column" 
                    pos="absolute" 
                    bg={colors.darkBlue} 
                    left="0" 
                    w="100%" 
                    h="93vh" 
                    initial={{x: "-100%"}} 
                    animate={{x: 0}} 
                    exit={{x: "100%"}} 
                    transition={{duration: .3}} 
                    >
                        <Link to="/" exact onClick={toggleMenu}>Home</Link>
                        <Link to="/Products" exact onClick={toggleMenu}>Products</Link>
                        <Link to={user.username && token ? "/Admin" : "/Login"} exact onClick={toggleMenu}>{user.username && token ? "Admin" : "Login"}</Link>
                        <Link to="/Cart" exact onClick={toggleMenu}>Cart</Link>
                        {user.username && token && <Text onClick={logOut}>Log Out</Text>}
                    </MotionCenter>
                )}
            </AnimatePresence>
        </HeaderStyled>
    )
}

export default Header
