import React, { Component } from "react";

// 클래스를 이용할때는 자기 자신한태서 데이터 선언을 하여서 사용한다.
// class Todo extends Component {
//     // 초기 데이터 선언
//     constructor(props){
//         super(props)
//         // state는 객체를 이용하는데 편하게 쓸수 있는 거..? 
//         this.state = {
//             name: 'cleaning',
//             done: false,
//             description: 'cleaning my room'
//         }
//     }
//     // 이벤트 핸들러 함수
//     // 화살표 함수는 this를 부모껄 빌려온다.
//     // 그냥 함수는 자기만의 this를 가지고 있어서 this값을 부모것을 사용하려면
//     // 부모가 정의를 해주어서 그것을 가져와서 사용해야한다.
//     changeTodoName = () => {
//         console.log(this)
//         if (this.state.name === 'cleaning') {
//             // this.baba.name = 'dd';
//             this.setState({ name: 'learning react' })
//         } else {
//             this.setState({ name: 'cleaning' })
//         }
//     }
//     render() {
//         // 초기 데이터 선언한 것을 가져와서 사용하기 
//         const {name, done, description} = this.state;
//         return(
//             // fragment태그는 <> 로 축약해서 사용할 수 있다.
//             <>
//                 {/* 문법은 $없이 중괄호 안에서 변수를 바로 사용이 가능하다. */}
//                 <h3>name: {name}</h3>
//                 <h3>done: {done? 'finished':'not done!'}</h3>
//                 <p>description: {description}</p>
//                 <button type="button" onClick={this.changeTodoName}>할일 이름 바꾸기</button>
//             </>
//         )
//     }
// }

// 함수형으로는 데이터값을 부모에서 받아와서 사용한다.
function Todo({ user, name, done, description}) {
    return (
        <>
            <h3>user: {user}</h3>
            <h3>name: {name}</h3>
            <h3>done: {done? 'finished':'not done!'}</h3>
            <p>description: {description}</p>
            <button type="button" onClick={this.changeTodoName}>할일 이름 바꾸기</button>
        </>
    )
}

export default Todo;