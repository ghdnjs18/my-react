import React, { Component } from 'react';

// 함수 처럼 사용
// function Person({country, name, age}) {
//     return (
//         <>
//             <h1>{country}</h1>
//             <h3>{name}</h3>
//             <h4>{age}</h4>
//         </>
//     )
// }

// 화살표 함수 처럼 사용
// const Person = ({country, name, age}) => {
//     return (
//         <>
//             <h1>{country}</h1>
//             <h3>{name}</h3>
//             <h4>{age}</h4>
//         </>
//     )
// }

class Person extends Component {
    render() {
        // 초기 데이터
        const name = 'howon';
        const age = 4;
        // App.js에서 속성으로 준 값을 가져와서 사용할 수 있다.
        const {country, text} = this.props // 부모로부터 전달되는 값

        // HTML 템플릿
        return (
            <>
                <h1>{country}</h1>
                <h2>{text}</h2>
                <h3>{name}</h3>
                <h4>{age}</h4>
                <h5>{'몰'}</h5>
            </>
        )
    }
}

export default Person;