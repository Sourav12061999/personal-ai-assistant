import {  } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Signin from './Pages/Signin';

function App() {
  // https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
