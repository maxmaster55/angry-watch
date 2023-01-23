import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import WatchMoviePage from './pages/WatchMoviePage'

function App() {
  const location = useLocation()
  const [isHomePage, setIsHomePage] = useState(true)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    if (location.pathname === "/") {
      console.log("is home page")
      setIsHomePage(true)
    } else {
      console.log("is not home page")
      setIsHomePage(false)
    }

  }, [location])

  return (
    <>
      <Navbar
        isHomePage={isHomePage}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch-movie/:movieId" element={<WatchMoviePage />} />
      </Routes>
    </>
  )
}

export default App
