import './App.css';

// import Todo from "./Todo";
// import Person from "./Person"
// import Person_func from "./Person_func"
// import Book from "./Book"
// import NameTag from './NameTag';
// import Counter from './Counter';
import React, {Component} from 'react';
import YoutubeVideo from './YoutybeVideo'
import dummyDate from './dummyDate';

class App extends Component{
  // 연습 방법 2.
  // const book = {
  //   title: '아아하',
  //   author: '홍길동',
  //   summary: '내용입니다아아아',
  //   genre: '호러',
  //   release: '2021-10-21',
  //   ISBN: 3
  // }
  
  // 부모에서 호출하면 자식 컴포넌트도 리렌더링된다.
  // state = {
  //   name: 'parent'
  // }
  // changeName = () => {
  //   this.setState({name: 'parent changed'})
  // }
  render() {
    // console.log('parent')
    // const {name} = this.state
    return (
      <div className="App">
        <header className="App-header">
          {/* 속성으로 Person안에서 값으로 사용이 가능하다. */}
          {/* <Person country='korea' text='text'></Person> */}
          {/* <Person_func country='korea' name='aazccd' age='5'></Person_func> */}
          {/* <Todo user='howon' name='cleaning' done={false} description='cleaning my room'></Todo> */}
          {/* 연습 방법 1. */}
          {/* <Book></Book> */}
          {/* 연습 방법 2. */}
          {/* <Book Book={book}></Book> */}
          {/* <NameTag></NameTag> */}
          {/* <h1>{name}</h1>
          <button type="button" onClick={this.changeName}>change namee</button>
          <Counter></Counter> */}
          {/* 하드 코딩 */}
          {/* <YoutubeVideo
            videoId = '1234567890'
            videoName = 'Christmas dance'
            videoLength = '23765'
            videoDescription = 'it is dance video on christmas party'
          ></YoutubeVideo> */}
          {dummyDate.map(d => {
            return (
              <YoutubeVideo
                key={d.videoId}
                videoId={d.videoId}
                videoName={d.videoName}
                videoLength={d.videoLength}
                videoDescription={d.videoDescription}
                videoAuthor={d.videoAuthor}
              >
                {/* 컨텐츠 삽입 */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9D4bFzuviZA"
                title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
              </YoutubeVideo>
            )
          })}
        </header>
      </div>
    );
  }
}