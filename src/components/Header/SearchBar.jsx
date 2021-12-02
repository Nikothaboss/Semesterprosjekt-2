import { Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { SearchBarStyled, DataItemStyled } from './header.styled'
import { Link } from 'react-router-dom'

    
const DataItem = ({image_url, title, price, id, onClick}) => {
    return(
    <Link to={"/Products/" + id}>
        <DataItemStyled justifyContent="space-between" alignItems="center" flexDir="row" onClick={onClick}>
            <img src={image_url} alt={title} />
            <h4>{title}</h4>
            <Text>{price},-</Text>
        </DataItemStyled>
    </Link>
    )
}

const SearchBar = ({data}) => {
    const [filteredData, setFilteredData] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) =>{
        const searchWord = e.target.value;
        setInputValue(searchWord)
        const newFilter = data.filter((item => {
            return item.title.toLowerCase().includes(searchWord.toLowerCase())
        }))

        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }

    }

    const handleDataItemClick = () =>{
        setFilteredData([])
        setInputValue("")
    }

    return (
        <SearchBarStyled>
        <Flex alignItems="center" width="50%" m="auto" flexDir="column" justifyContent="center">
        <input
        type="text"
        placeholder="Search"
        className="searchbar"
        value={inputValue}
        onChange={handleChange}/>
        </Flex> 
        {filteredData.length !== 0 && inputValue.trim() !== "" && (
            <Flex className="dataResults" flexDir="column">
                {filteredData.map((item =>{
                    return (
                        <DataItem onClick={handleDataItemClick} image_url={item.image_url} title={item.title} price={item.price} id={item.id} /> 
                    )
                }))}
            </Flex>
        )}
        </SearchBarStyled>
    )
}

export default SearchBar
