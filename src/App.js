import { useState } from 'react/cjs/react.development';
import './App.css';
import Nav from './Nav'

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