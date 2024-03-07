import { useState } from "react"
import axios from "axios"
import {v1 as uuid} from "uuid";


export const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true)
    const toggleCard = () => {
        setIsFacingUp(isFacingUp => !isFacingUp)
    }
    return [isFacingUp, toggleCard]
}

export const useAxios = (baseUrl) => {
    try {
        const [state, setState] = useState([])

        // added urlAddOn to default to empty string so the cards api doesn't add on to base url
        const addCard = async (urlAddOn="") => {
            const response = await axios.get(baseUrl + urlAddOn)
            setState([...state, {...response.data, id: uuid()}])
    }
        return [state, addCard]
    } catch (error) {
        console.log(error)
    }
}

