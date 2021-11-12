import React from "react";
import { useRef } from "react/cjs/react.development";

function CustomInput () {
    const textInput = useRef(); // ref 생성하기

    const focusInput = () => {
        console.log(textInput.current)
        textInput.current.focus() // ref 사용하기
    }
    return (
        <>
            {/* ref 설정하기 */}
            <input type="text" ref={textInput}></input>
            <button onClick={focusInput}>focus input</button>
        </>
    )
}

export default CustomInput;