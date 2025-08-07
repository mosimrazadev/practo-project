import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import FindDoctors from './pages/FindDoctors'
import Surgeries from './pages/Surgeries'
import VideoConsult from './pages/VideoConsult'
import DoctorsList from './components/DoctorsList'
import { SearchProvider } from './store/SearchContext'

function App() {

  return (
    <BrowserRouter>
    <SearchProvider>
      <Navbar/>
       <Routes>
          <Route path='/' element = {<FindDoctors/>}/>
          <Route path='/surgeries' element = {<Surgeries/>}/>
          <Route path='/videoconsult' element = {<VideoConsult/>}/>
          <Route path='/doctors' element = {<DoctorsList/>}/>
       </Routes>
    </SearchProvider>
    </BrowserRouter>
  )
}

export default App
