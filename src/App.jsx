import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Routes , Route } from "react-router"
import AnimeDetail from "./components/AnimeDetail"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Search from "./components/Search"
import Genres from "./components/Genres"
import All from "./components/All"
import TopRated from "./components/TopRated"
import Recently from "./components/Recently"
import Popular from "./components/Popular"
import NotFound from "./NotFound"
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    <Route element={<ProtectedRoute />} >
      <Route path="/anime/:animeId" element={<AnimeDetail />} />
      <Route path="/search" element={<Search />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/toprated" element={<TopRated />} />
      <Route path="/all" element={<All />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/recently" element={<Recently />} />
    </Route>
    <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  ) 
}

export default App
