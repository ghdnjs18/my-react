import './App.css';

import React, {Component} from 'react';
import Movie from './Movie'

// 리액트 기초이론 3 - JSX 문법
// function App() {
//   const person = {
//     name: "howon",
//     age: 4
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* JSX를 사용한 문법 */}
//         {/* <div className="greeting">Hello</div> */}
//         {/* 3항 연산자 사용 */}
//         <div>{person.name ? "your name is nice !":"name doesn't exist !"} - {person.age}</div>
//         {/*  */}
//         <div>{person.name && "your name is nice !"}</div>
        
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   // 카운터 변수
//   state = {
//     count: 0
//   }
//   // 카운터용 이벤트 핸들러
//   increase = () => {
//     this.setState({count: this.state.count +1})
//   }
//   showUI = (cnt) => {
//     let ui = null;
//     switch(cnt) {
//       case 0: 
//         ui = <h1>Home00</h1> 
//         break;
//       case 1: 
//         ui = <h1>Home11</h1> 
//         break;
//       case 2: 
//         ui = <h1>Home22</h1> 
//         break;
//       default : 
//         ui = <h1>Notpound</h1> 
//     }
//     return ui;
//   }
//   render() {
//     // 카운터 값 가져오기
//     const { count } = this.state
//     // props 연습용
//     const name = "howon"
//     // 밑에 방식 보다 조금더 효율적으로 이용하기 위해서 따로 가져와서 사용
//     const head = () => (<h1>태그</h1>)
//     return (
//       <div className="App">
//         <header className="App-header">
//             {/* 카운터 UI보여주기 */}
//             {this.showUI(count)}
//             <button type="button" onClick={this.increase}>카운팅</button>
//             {/* JSX문법으로 바로 넣어줘도 사용이 가능하다. */}
//             {(
//                 <>
//                   <h1>헤딩태그</h1>
//                   {/* render()가 호출 될때마다 메모리에 새로 생성되어서 비효율적인 방식이다. */}
//                   {/* <p name={() => (<h1>태그</h1>)}>lorem {name} {this.props.name} lorem lorem</p> */}
//                   <p name={head}>lorem {name} {this.name} lorem lorem</p>
//                 </>
//               )} 
//         </header>
//       </div>
//     )
//   }
// }

class App_03 extends Component{
    //
    constructor(props) {
      console.log('constructor')
      super(props)
      this.state = {
        // 이름 변경용
        // name: "howon"
        // Movie 용
        loading: true,
        movies: []
      }
    }
  
    // 이름 변경용 이벤트 핸들러 함수
    changeName = () => {
      console.log(this)
      this.setState({name: "name changed"})
    }
  
    // 컴포넌트가 생성되었을때 호출이 된다
    componentDidMount() {
      const BASE_URL = 'https://yts.mx/api/v2/list_movies.json?sort_by=download_count'
    //   const BASE_URL = 'https://yts.mx/api/v2/list_movies.json?limit=12'
      // const BASE_URL = 'localhost:5000/api/words'
    //   const BASE_URL = 'https://dictionary-search-ho.herokuapp.com/api/words'
      console.log('mount')
      // 서버에서 데이터 가져오기 (movie)
      fetch(BASE_URL, {
        header: {
          "Content-Type":"application/json"
        }
      }) 
      .then( res => res.json()) 
      .then( result => { 
        const {data: {movies}} = result 
        console.log(movies) 
        this.setState({loading: false, movies}) 
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
      // 이름변경
      // const {name} = this.state
      // 
      const {loading, movies} = this.state
      // return (
      //   // 이름변경
      //   <div className="App">
      //     <h1>{name}</h1>
      //     <button onClick={this.changeName}>Change name</button>
      //   </div>
      // )
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
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  genres={movie.genres}
                  cover={movie.medium_cover_image}
                  summary={movie.summary}
                ></Movie>
              )
            })}
          </div>
        )
      }
    }
  }

export default App_03;