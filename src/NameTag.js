import React, { Component} from "react";

class NameTag extends Component {
    state = {
        name: 'initial name'
    }

    changeName = () => {
        // render 함수가 호출된다.
        if (this.state.name === 'initial name')
            this.setState({name : 'changed name'});
        else this.setState({name : 'initial name'});
        // 직접 변경하면 render 함수가 호출되지 않는다.
        // this.state.name = 'changed name';
    }

    render() {
        console.log('NameTag')
        const {name} = this.state;
        return (
            <>
                <h1>{name}</h1>
                <button type="button" onClick={this.changeName}>change name</button>
            </>
        )
    }
}

export default NameTag;