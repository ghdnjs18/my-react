import './Card.css'

import React from "react";
import Words from './dummyData2'
import { useEffect, useState } from 'react/cjs/react.development';


function Card () {
    const [time, setTime] = useState(1);
    // const [isIncrease, setIsincrease] = useState(false);
    const [index, setIndex] = useState(0);
    const word_pircked = Words[index];

    const randomNumber = () => {
        return Math.floor(Math.random()*Words.length -1) + 1;
    }

    const setNumber = () => {
        setIndex(randomNumber());
    }

    // setTimeout() 일정 시간이 지난 후에 함수를 실행
    useEffect(() => {
        // if (!isIncrease) return undefined;
        const tick = setTimeout(() => setTime(time + 1), 1000);
        return () => clearInterval(tick);
    })
    // },[time, isIncrease]) // 두번째 인자에는 왜 이걸 넣는가?

    // clearInterval이 없으면 콜백함수가 쌓이면서 함수가 여러번 불려오는 오류가 발생한다.
    useEffect(() => {
        const suf = setInterval(setNumber, 1000); // 주어진 시간 견격으로 콜백함수를 반복 호출한다,
        return () => clearInterval(suf); // setInterval()의 반복을 중단시켜준다.
    })

    return ( 
        <div>
            <h2>{ time }</h2>
            <div className="card">
                <h1>{word_pircked.word}</h1>
                <h1>{word_pircked.meaning}</h1>
            </div>
        </div>
    )
}

export default Card;