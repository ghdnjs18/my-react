import './App.css';
import Button from './Button'

function App() {
  const Click = () => alert('clicked button') // 이벤트핸들러 함수
  return (
    <div className="App">
      <Button size='small' color='blue' handleClick={Click} disabled={true}>Add Todo</Button>
      <Button size='medium' color='tomato'>
      <img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>
        Add Todo</Button>
      <Button size='large' color='grey'>Add Todo</Button>
    </div>
  )
}

// react hooks를 이용
function App() {
    const [menus, setMenus] = useState([
      {
      siteTitle:'구글',
      siteUrl:'https://google.com'
      },
      {
      siteTitle:'네이버',
      siteUrl:'https://naver.com'
      },
      {
      siteTitle:'사전 검색 서비스',
      siteUrl:'https://shinhyohaeng.github.io/kor-dic-front/'
      }
    ])
    return (
      <div className="App">
        <Nav menus={menus}></Nav>
      </div>
    );
  }

export default App;