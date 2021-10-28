import './App.css';
// import Todo from "./Todo";
// import Person from "./Person"
// import Person_func from "./Person_func"
import Book from "./Book"

function App() {
  // 연습 방법 2.
  const book = {
    title: '아아하',
    author: '홍길동',
    summary: '내용입니다아아아',
    genre: '호러',
    release: '2021-10-21',
    ISBN: 3
  }
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
        <Book Book={book}></Book>
      </header>
    </div>
  );
}

export default App;