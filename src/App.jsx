import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Button from './components/button/button'
import Input from './components/Input/Input'

function App() {
  const [text, setText] = useState("")
  const onChangeInput = (e) => {
    setText(e.target.value)
  }
  const cleanInput = () => {
    setText("")
  }
  console.log(text)
  return (
    <>
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <form>
        <div className='form-group'>
          <Button
            onClick={cleanInput}
            type={`primary`}
          >
            {text}
          </Button>
          <Input
            onChange={onChangeInput}
            value={text}
            />
          <Button
            onClick={cleanInput}
            type={`primary`}
          ></Button>
        </div>
      </form>
      </Routes>
    </>
  )
}

export default App
