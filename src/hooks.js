import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = (isCardFaceUp = true) => {
    const [isFlipped, setFlipped] = useState(isCardFaceUp);

    const flip = () => {
        setFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
}

const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]);

    const addCard = async (restOfUrl) => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(responses => [...responses, { ...response.data, id: uuid() }]);
    };
    
    return [responses, addCard];
}

export {useFlip, useAxios};