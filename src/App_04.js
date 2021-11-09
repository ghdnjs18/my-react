import './App.css';

import React, { Component } from 'react';
// import sports from './dummyData2'
import flashCards from './dummyData2'


class App extends Component {
  // state 초기화
  state = {
    count: 0,
    num: 0,
    loto: [],
    lototo: [],
    // 풀이용
    number: 0,
    numbers: [],
    index: 0
  }

  // 이벤트 핸들러
  increaseCount = () => { 
    // this.setState({count: this.state.count + 1});
    this.setState({num: this.pickRandomNumber(1, 45)});
    this.setState({count: this.pickRandomNumber(0, 11)});
    this.setState({loto: this.lotoNumberOver(6)});
    // this.setState({lototo: this.lotoNumber(6)});
  }
  // 랜덤 숫자 1 ~ 45
  pickRandomNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)) + min;
  }
  // 중복 있는 로또 번호
  lotoNumberOver = (n) => {
    const tmps = new Array(n).fill(0);
    return tmps.map(n => Math.floor(Math.random()*45) + 1).join(', ');
  }
  // 중복 없는 로또 번호
  lotoNumber = () => {
    let tmps = new Array(6).fill(0);

    for (let i = 0; i < 6; i++) {
      let num = this.pickRandomNumber(1, 45);
      if (i === 0) tmps[i] = num;

      for (let j = 0; j < i; j++) {
        if (tmps[j] === num) {
          i -= 1;
          break;
        }
        if (j === i-1) tmps[i] = num;
      }
      
    }
    // return tmps.join(', ');
    this.setState({lototo: tmps.join(' ')});
  }
  // 성용쌤 풀이
  checkDuplication = (numbers, picked) => {
    return numbers.find(num => num === picked)
  }
  showRandomNumber = () => {
    const numbers = []
    let cnt = 0
    while(numbers.length < 6) {
      const picked = this.pickRandomNumber(1, 45);
      const isDuplicated = this.checkDuplication(numbers, picked);
      if(isDuplicated) {
        numbers.push(this.pickRandomNumber(1, 45))
      } else {
        numbers.push(picked)
      }
      cnt++;
    }
    this.setState({number:this.pickRandomNumber(1, 45), numbers: numbers.join(' ')})
  }
  setNumber = () => {
    this.setState({index: this.pickRandomNumber(0, flashCards.length-1)})
  }

  // 컴포넌트 생명주기
  // setInterval 안에서 매개변수를 가지는 이벤트는 계속 작동하지 않는다.
  componentDidMount() { // 초기에 웹화면이 렌더링되었을때 타이머를 설정함
    this.countID = setInterval(this.increaseCount, 1000);
    // this.numID = setInterval(this.pickRandomNumber(1, 45), 1000);
    this.numID = setInterval(this.lotoNumber, 1000);
    this.showID = setInterval(this.showRandomNumber, 1000);
    this.setID = setInterval(this.setNumber, 1000);
  }
  componentWillUnmount() { // 사용자가 웹화면을 벗어나면 타이머를 해제함
    clearInterval(this.countID);
    clearInterval(this.numID);
    clearInterval(this.showID);
    clearInterval(this.setID);
  }
  render() {
    const { count, num, loto, lototo } = this.state;
    const flashCard = flashCards[count % flashCards.length]
    // const sport = sports[count % sports.length]
    // 성용쌤 풀이
    const { number, numbers, index } = this.state;
    const word_picked = flashCards[index]
    const cardStyle = {
      background: 'tan',
      width: '30%',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      color: 'white'
    }
    return (
      <div className="App">
        <h1>Increase count automatically !</h1>
        {/* <h2>{ count }</h2> */}
        <h2>{ num }</h2>
        <h2>{ loto }</h2>
        <h2>{ lototo }</h2>
        {/* <img src={sport.src} alt={sport.title}></img> */}
        <h1>{flashCard.word}</h1>
        <h2>{flashCard.meaning}</h2>
        <h1>풀이</h1>
        <h2>{number}</h2>
        <h2>{numbers}</h2>
        <div style={cardStyle}>
          <h1 style={{borderBottom: '1px solid lightgrey'}}>Flash Card</h1>
          <h2>{word_picked.word}</h2>
          <h2>{word_picked.meaning}</h2>
        </div>
      </div>
    );
  }
}

export default App;