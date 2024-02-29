import axios from "axios"
import { useState, useEffect } from "react"
import {v1 as uuid} from "uuid";

export const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true)
    const toggleCard = () => {
        setIsFacingUp(isFacingUp => !isFacingUp)
    }
    return [isFacingUp, toggleCard]
}

export const useAxios =  (url, inc, cards) => {
    let response;
    const [state, setState] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            response = await axios.get(url)
           
        }
        fetchData()
        return () => {

        }
    }, [inc])
   
    return [response]
}

