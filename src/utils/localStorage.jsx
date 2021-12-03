import { useState } from "react"

export const useLocalStorage =(key, initialValue)=>{
    
    const [storedValue, setStoredValue] = useState(()=>{
        try{    
            //Get from localStorage with key
            const item = window.localStorage.getItem(key)
            // If !item return initalValue
            return item ? JSON.parse(item) : initialValue
            
        }catch(err){
            console.log(err)
            return initialValue
        }
    })

    const setValue = (value) =>{
        try{
        //Allow value to be a function so we have the same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        //Save data
        setStoredValue(valueToStore)

        //Save to localStorage
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
    }catch(err){
        console.log(err)
    }}

    return [storedValue, setValue];
}