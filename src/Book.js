import React, {Component} from "react";

// 연습 방법 1
// class Book extends Component {
//     // 초기 데이터 선언
//     constructor(props){
//         super(props)
//         // state는 객체를 이용하는데 편하게 쓸수 있는 거..? 
//         this.state = {
//             title: '아아하',
//             author: '홍길동',
//             summary: '내용입니다아아아',
//             genre: '호러',
//             release: '2021-10-21',
//             ISBN: 3
//         }
//     }

//     render() {
//         // 초기 데이터 선언한 것을 가져와서 사용하기 
//         const {title, author, summary, genre, release, ISBN} = this.state;

//         return (
//             <>
//                 <p>title : {title}</p>
//                 <p>author : {author}</p>
//                 <p>summary : {summary}</p>
//                 <p>genre : {genre}</p>
//                 <p>release : {release}</p>
//                 <p>ISBN : {ISBN}</p>
//             </>
//         )
//     }
// }

// 연습 방법 2.
function Book ({Book}) {
    return (
        <>
                <p>title : {Book.title}</p>
                <p>author : {Book.author}</p>
                <p>summary : {Book.summary}</p>
                <p>genre : {Book.genre}</p>
                <p>release : {Book.release}</p>
                <p>ISBN : {Book.ISBN}</p>
            </>
    )
}

export default Book;