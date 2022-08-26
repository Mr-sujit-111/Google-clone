import { useEffect, useState } from 'react'
import resultJson from '../config/ResultJson'
function useGoogle(searchValue) {

    const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY
    const API_KEY = process.env.REACT_APP_API_KEY
    console.log(CONTEXT_KEY, API_KEY);
    const [data, setData] = useState("")
    useEffect(() => {
        /* const fetchData = async () => {
            const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchValue}`);
            let result = await response.json();
            setData(result);
        } 
        fetchData(); */
        setData(resultJson)
    }, [searchValue, API_KEY, CONTEXT_KEY])

    return { data }
};

export default useGoogle