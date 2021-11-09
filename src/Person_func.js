import React from 'react';

// 함수 컴포넌트
// function Person_func({country, name, age}) {
//     return (
//         <>
//             <h1>{country}</h1>
//             <h3>{name}</h3>
//             <h4>{age}</h4>
//         </>
//     )
// }

// 화살표 함수 컴포넌트
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