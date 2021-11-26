import { useEffect, useState } from "react";


export const useResize = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const handleResize = () =>{
        setScreenWidth(window.innerWidth)
        console.log(screenWidth)
    } 
    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    }, [screenWidth])

    return {screenWidth}

}