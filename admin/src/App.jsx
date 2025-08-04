import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import FindDoctors from './pages/FindDoctors'
import Surgeries from './pages/Surgeries'
import VideoConsult from './pages/VideoConsult'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path='/' element = {<FindDoctors/>}/>
          <Route path='/surgeries' element = {<Surgeries/>}/>
          <Route path='/videoconsult' element = {<VideoConsult/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
