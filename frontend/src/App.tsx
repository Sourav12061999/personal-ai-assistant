import {  } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Layout from './Features/Layout';
import Accounts from './Pages/Accounts';
import Permissions from './Pages/Permissions';
import Train from './Pages/Train';

function App() {
  // https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/accounts' element={<Layout><Accounts /></Layout>} />
        <Route path='/permissions' element={<Layout><Permissions /></Layout>} />
        <Route path='/train' element={<Layout><Train /></Layout>} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
