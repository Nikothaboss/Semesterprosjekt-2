import Logo from './Logo';
import SearchBar from './SearchBar';
import { Flex, Text } from '@chakra-ui/layout'
import { HeaderStyled } from './header.styled'
import { MdComputer, MdAccountCircle, MdShoppingCart, MdMenu, MdLogout } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';
import { useResize } from '../../utils/resize';
// import { AnimatePresence } from 'framer-motion';
import { useFetch } from '../../utils/fetch';
import { base_url } from '../../utils/API';
import { useLocalStorage } from '../../utils/localStorage';

const Header = () => {
    const location = useLocation()
    console.log(location)
    const {screenWidth} = useResize()
    const {data} = useFetch(base_url +"/products")
    const [token] = useLocalStorage("token")
    const [user] = useLocalStorage("user", "")

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

        const logOut = () =>{
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.location.href = location.pathname
        }
        return (
            <Flex alignItems="flext-start" justifyContent="space-between" width="33%">
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
                {screenWidth > 768 ? <Nav /> : <MdMenu size="2.2rem" />}
            </Flex>
        </HeaderStyled>
    )
}

export default Header
