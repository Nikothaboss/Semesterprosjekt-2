import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, request) =>{
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    const getProducts = useCallback(async () =>{
        setLoading(true)

        try{
            const res = await fetch(url, request)
            const data = await res.json()

            setResponse(data)
            setLoading(false)
        } catch{
            setHasError(true)
            setLoading(false)
        }
    }, [url, request]);

    useEffect(()=>{
        getProducts();
    }, [url, getProducts])

    return { response, loading, hasError }
}