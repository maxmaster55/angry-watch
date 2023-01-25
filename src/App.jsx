import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import WatchMoviePage from './pages/WatchMoviePage'


//TODO: add dark mode
function App() {
  const location = useLocation()
  const [isHomePage, setIsHomePage] = useState(true)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true)
    } else {
      setIsHomePage(false)
    }

  }, [location])

  return (
    <div className="flex-col">
      <Navbar
        isHomePage={isHomePage}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isHomePage={isHomePage}
              isSearchActive={isSearchActive}
              setIsSearchActive={setIsSearchActive}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />}
        />
        <Route path="/results/:movies" element={<ResultsPage />} />
        <Route path="/watch-movie/:movieId" element={<WatchMoviePage />} />
      </Routes>
    </div>
  )
}

export default App
