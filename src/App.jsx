import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Routes , Route } from "react-router"
import AnimeDetail from "./components/AnimeDetail"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    <Route element={<ProtectedRoute />} >
      <Route path="/anime/:animeId" element={<AnimeDetail />} />
    </Route>
    </Routes>
    </>
  )
}

export default App
