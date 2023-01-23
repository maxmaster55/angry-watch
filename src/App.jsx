import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WatchMoviePage from './pages/WatchMoviePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/watch-movie/:movieId" element={<WatchMoviePage />} />
    </Routes>
  )
}

export default App
