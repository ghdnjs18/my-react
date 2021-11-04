import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0
    }
    // 업데이트 되지 않는 함수
    increase = () => {
        const {count} = this.state
        console.log(`before updating state: ${count}`)
        this.setState({count: count + 1})
        console.log(`after updating state: ${count}`)
    }
    increaseMultiple = () => {
        // 업데이트 되지 않는 구간
        this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다.(0 -> 1)
        this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다.(0 -> 1)
        this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다.(0 -> 1)

        console.log(`right after event: ${this.state.count}`)
    }

    // 동시에 여러번 호출해야 할 경우 업데이트 함수를 사용
    // increase = () => {
    //     const {count} = this.state
    //     console.log(`before updating state: ${count}`)
    //     this.setState(prevState => {
    //         // prevState에 값을 적용시키고 한번에 변경된 내용을 업데이트 시킨다.
    //         return {count: prevState.count + 1}
    //     })
    //     console.log(`after updating state: ${count}`)
    // }
    // increaseMultiple = () => {
    //     // 업데이트 되지 않는 구간
    //     this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다.(0 -> 1)
    //     this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다.(0 -> 1)
    //     this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다.(0 -> 1)

    //     console.log(`right after event: ${this.state.count}`)
    // }
    render() {
        // 여기서 state가 없데이트 된다.
        // 모든 이벤트가 종료되는 이 시점에서 state 를 변경하고 render 함수를 한번만 호출한다.
        console.log('child counter')
        const {count} = this.state
        console.log(`state in render function: ${count}`)
        return (
            <>
                <h1>{count}</h1>
                <button type="button" onClick={this.increaseMultiple}>increase count</button>
            </>
        )
    }
}

export default Counter