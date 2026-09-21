import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AnimeRow from "./components/AnimeRow"

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <AnimeRow title="Popular" url="https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank" />
    <AnimeRow title="Top rated" url="https://kitsu.io/api/edge/anime?page[limit]=20&sort=-averageRating" />
    <AnimeRow title="Recently" url="https://kitsu.io/api/edge/anime?page[limit]=20&sort=-updatedAt
" />
    <AnimeRow title="Action"
      url="https://kitsu.io/api/edge/anime?filter[categories]=action&page[limit]=20&sort=-averageRating"
    />
    <AnimeRow title="Slice of life"
    url="https://kitsu.io/api/edge/anime?filter[categories]=slice-of-life&page[limit]=20&sort=-averageRating"
  />
    </>
  )
}

export default App
