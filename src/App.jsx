import { useState } from 'react'
import { LoginForm } from './Components/LoginForm'
import { RegisterForm } from './Components/RegisterForm'
import { HomePage } from './Components/HomePage'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
        <Route path="/login" element={<LoginForm />}></Route>

        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>

    </Routes>
  )
}

export default App
