import './App.css';

import React, { Component } from 'react';
import Word from './Word';

class App extends Component{
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      loading: true,
      words: []
    }
  }

  // 컴포넌트가 생성되었을때 호출이 된다
  componentDidMount() {
    // const BASE_URL = 'https://yts.mx/api/v2/list_movies.json?limit=12'
    // const BASE_URL = 'localhost:5000/api/words'
    const BASE_URL = 'https://dictionary-search-hoho.herokuapp.com/api/words'
    console.log('mount')
    // 서버에서 데이터 가져오기 (movie)
    fetch(BASE_URL) 
    .then( res => res.json()) 
    .then( result => { 
      const {words} = result 
      console.log(words) 
      this.setState({loading: false, words}) 
    })
  }
  // 컴포넌트가 생성되었을때 호출이 된다
  componentDidUpdate() {
    console.log('update')
  }
  // 컴포넌트가 생성되었을때 호출이 된다
  componentDidWillUnmount() {
    console.log('unmount')
  }

  render() {
    console.log('render')
    const {loading, words} = this.state
    // 로딩
    if (loading) {
      return (
        <div>
          <h1>Loading....</h1>
        </div>
      )
    } else {
      return (
        <div>
          <div id="search-box">
            <input type="text" id="search" value="" placeholder="단어를 적으시오"></input>
            <input type="submit" id="submit" value="검색"></input>
        </div>
          {/* 데이터를 참조하고 건들지는 않는다. */}
          {/* map:데이터 순회 filter:삭제 검색 reduce: */}
            {words.map(w => { 
              return (
                <Word
                  key={w._id}
                  seq={w.seq}
                  keyword={w.keyword}
                  link={w.link}
                  hanja={w.hanja}
                  word_class={w.word_class}
                  meaning={w.meaning}
                ></Word>
                )
              })}
        </div>
      )
    }
  }
}


export default App;