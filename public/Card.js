import './Card.css'

import React from "react";
import Words from './dummyData2'
import { useEffect, useState } from 'react/cjs/react.production.min';


function Card () {
    const [index, SetIndex] = useState(0)
    const word_pircked = Words[index]

    const randomNumber = () => {
        return Math.floor(Math.random()*Words.length -1) + 1;
    }

    const setNumber = () => {
        SetIndex(randomNumber())
    }

    useEffect(() => {

    }, setNumber())
    return ( 
        <div>
            <h1>{word_pircked.word}</h1>
            <h1>{word_pircked.meaning}</h1>
        </div>
    )
}

export default Card;