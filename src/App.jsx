import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import VideoPlayer from './pages/VideoPlayer'

function App() {

  return (
    <>
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/video" element={<VideoPlayer/>} />
    </Routes>
    </>
  )
}

export default App
