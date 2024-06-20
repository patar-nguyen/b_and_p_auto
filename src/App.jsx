import { useState } from 'react'
import { LoginForm } from './Components/LoginForm'
import { RegisterForm } from './Components/RegisterForm'
import { HomePage } from './Components/HomePage'
import { Routes, Route} from 'react-router-dom'
import { Appointment } from './Components/Appointment'
import { MaintenanceRecords } from './Components/MaintenanceRecords'


const App = () => {
  
  return (
    <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/maintenance" element={<MaintenanceRecords />}></Route>
    </Routes>  )
}

export default App;

// function App() {

//   return (
//     <Routes>
//         <Route path="/login" element={<LoginForm />}></Route>
//         <Route path="/appointment" element={<Appointment />}></Route>

//         <Route path="/home" element={<HomePage/>}></Route>
//         <Route path="/register" element={<RegisterForm />}></Route>

//     </Routes>
//   )
// }

// export default App

