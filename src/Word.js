import './Word.css';

import React from "react"

function Word ({seq, keyword, link, hanja, word_class, meaning}) {
    return (
        <>
            <div className="resultInner">
                <div className="item move-up">
                    <div className="word">{keyword}<sup>{seq}</sup><p className="hanja">{hanja}</p> <a href={link}>더 보기  &raquo;</a></div>
                    <p className="description"><span>{word_class}</span> {meaning}</p>
                </div> 
            </div>
        </>
    )
}

export default Word;