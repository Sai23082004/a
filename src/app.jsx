import { useState } from 'preact/hooks'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home'
import DownloadPage from './components/DownloadPage'
import DownloadPageTwo from './components/DownloadPageTwo'

export function App() {
  const [val,setVal]=useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/download' element={<DownloadPage/>} ></Route>
    <Route path='/downloadtwo' element={<DownloadPageTwo/>} ></Route>

    <Route path='*' element={<Navigate to="/"/>} ></Route>
    
    </Routes>
    
    </BrowserRouter>
  )
}
