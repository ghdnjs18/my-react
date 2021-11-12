import './App.css';

import { useState } from 'react/cjs/react.development';

import Modal from './Modal'
import Button from './Button'
import Card from './Card'
import CustomInput from './CustomInput'

function App() {
    // 모달창
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState('')
  
    // 모달 창 사용
    const openModal = () => {
      // open ? setOpen(false):setOpen(true)
      setMsg('')
      setOpen(true)
    }
    const closeModal = () => {
      // open ? setOpen(false):setOpen(true)
      setOpen(false)
    }
    const removeMessage = () => {
      setMsg('삭제를 성공하셨습니다.')
      closeModal()
    }

    // 요소 참조 연습문제
    const textInput = useRef(); // ref 생성하기

    const focusInput = () => {
        textInput.current.click() // ref 사용하기
    }
   
    return (
      <div className="App">
        {/* 버튼 이벤트를 이용한 모달창 사용 */}
        <Button handleClick={openModal}>할일 삭제</Button>
        <h1>{msg}</h1>
        <Modal open={open}>
          <div className="header">할일을 삭제하시겠습니까?</div>
          <div className="body">정말로 삭제를 하시겠습니까?</div>
          <div className="footer">
            <Button size='small' color='blue' handleClick={removeMessage}>삭제</Button>
            <Button size='small' color='grey' handleClick={closeModal}>닫기</Button>
          </div>
        </Modal>
        {/* 연습문제 3 - 랜덤 카드를 컴포넌트로 만들어서 사용하기*/}
        <Card></Card>
        {/* 요소 참조 연습 */}
        <CustomInput></CustomInput>
        {/* 요소 참조 연습문제 */}
        <h1>File Upload</h1>
        <button type="button" onClick={focusInput}>Upload</button>
        <input type="file" ref={textInput} style={{display: 'none'}}/>
      </div>
    );
  }

export default App;