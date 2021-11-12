import './App.css';

import React, { Component } from 'react';
import words from './dummyData2'
import Button from './Button';
import Words from './Words';

class App extends Component {
  // 버튼 토글을 이용한 화면 테마 변경
  state = {
    toggle: true
    // 단어 삭제용
    words: words
  }

  toggleScreenMode = () => {
    this.setState({toggle: !this.state.toggle});
  }
  // 삭제 이벤트 핸들러
  handleRemove = (id, e) => {
    console.log(id); // 단어 id값 / 인덱스 번호
    // e.target 이벤트 발생하는 태그 / previousSibling : 바로 전의 태그 / innerText : 태그의 내용
    console.log(e.target.previousSibling.innerText); // 단어 이름 / w.word
    // console.log(e.target.nextSibling.innerText) // 단어 뜻 / w.meaning

    const word = e.target.previousSibling.innerText;
    alert(`You want to delete word - ${word}?`);
    
    // 제거하려는 단어의 id와 일치하는 요소만 걸러냄
    const words = this.state.words.filter((w, index) => index !== id) 
    this.setState({words})
  }
  render() {
    // 버튼 토글을 이용한 화면 테마 변경
    const { toggle } = this.state;
    // 단어 삭제용
    const { words } = this.state;
    const wordStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    return (
      // 버튼 토글을 이용한 화면 테마 변경
      <div className={`normal ${toggle? "":"dark"}`}>
        <h1>Change screen mode</h1>
        <button type="button" onClick={this.toggleScreenMode}>{toggle? "DARK":"NORMAL"}</button>
        {/* 단어 삭제용 */}
        <h1 style={{textAlign: 'center'}}>영단어 목록</h1>
        {words.map((w, id) => {
          return (
            <div key={id} style={wordStyle}>
              <h2>{w.word}</h2>
              <Button size='small' type='button' handleClick={(e) => this.handleRemove(id, e)}>DELETE</Button>
              {/* <h2>{w.meaning}</h2> */}
            </div>
          )
        })}
        {/* 컴포넌트를 이용한 단어 삭제용 */}
        <h1 style={{textAlign: 'center'}}>영단어 목록</h1>
        {words.map((w, id) => {
          return (
            <Words key={id} w={w} handleRemove={(e) => this.handleRemove(id, e)}></Words>
          )
        })}
      </div>
    )
  }
}

// 함수형으로 변환해보기 
function App() {
  // 삭제
  const [word, setWord] = useState(words)
  // 삭제 이벤트 핸들러
  const handleRemove = (id, e) => {
    console.log(id); // 단어 id값 / 인덱스 번호
    console.log(e.target.previousSibling.innerText); // 단어 이름 / w.word

    const worda = e.target.previousSibling.innerText;
    alert(`You want to delete word - ${worda}?`);
    
    // 제거하려는 단어의 id와 일치하는 요소만 걸러냄
    const words = word.filter((w, index) => index !== id)
    setWord(words);
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>영단어 목록</h1>
      {word.map((w, id) => {
        return (
          <Words key={id} w={w} handleRemove={(e) => handleRemove(id, e)}></Words>
        )
      })}
    </div>
  )
}

export default App;