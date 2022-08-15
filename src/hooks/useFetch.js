import axios from "axios"
import { useState, useEffect } from "react"
const useFetch = (URL) => {
    const [response, setResponse] = useState(null)
    useEffect(() => {
        axios.get(URL)
            .then((res) => setResponse(res.data))
            .catch((err) => clg(err))
    }, [])

    return response
}

export default useFetch