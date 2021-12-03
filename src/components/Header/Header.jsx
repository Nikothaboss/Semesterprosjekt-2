import Logo from './Logo';
import SearchBar from './SearchBar';
import { Flex, Text } from '@chakra-ui/layout'
import { HeaderStyled } from './header.styled'
import { MdComputer, MdAccountCircle, MdShoppingCart, MdMenu } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useResize } from '../../utils/resize';
// import { AnimatePresence } from 'framer-motion';
import { useFetch } from '../../utils/fetch';
import { base_url } from '../../utils/API';

const Header = () => {
    const {screenWidth} = useResize()
    const {data} = useFetch(base_url +"/products")

    const Nav = () =>{
        const NavItem = ({icon, location=""}) =>{
            return (
            <NavLink exact={true} to={"/" + location}>
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
            <Flex alignItems="flext-start" justifyContent="space-between" width="33%">
                <NavItem icon={<MdComputer size="1.2rem"/>} location="Products"/>
                <NavItem icon={<MdAccountCircle size="1.2rem"/>} location="Login"/>
                <NavItem icon={<MdShoppingCart size="1.2rem"/>} location="Cart"/>
            </Flex>
        )
      
    }
        
    return (
        <HeaderStyled >
            <Flex maxWidth="1100px" m="auto" justifyContent="space-between">
                <Logo />
                <SearchBar data={data} />
                {screenWidth > 768 ? <Nav /> : <MdMenu size="1.2rem" />}
            </Flex>
        </HeaderStyled>
    )
}

export default Header
