import React from 'react';

// 함수 처럼 사용
// function Person_func({country, name, age}) {
//     return (
//         <>
//             <h1>{country}</h1>
//             <h3>{name}</h3>
//             <h4>{age}</h4>
//         </>
//     )
// }

// 화살표 함수 처럼 사용
const Person_func = ({country, name, age}) => {
    return (
        <>
            <h1>{country}</h1>
            <h3>{name}</h3>
            <h4>{age}</h4>
        </>
    )
}

export default Person_func;