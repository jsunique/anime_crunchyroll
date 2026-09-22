import React from 'react'
import Navbar from "./Navbar"
import Hero from "./Hero"
import AnimeRow from "./AnimeRow"

export default function Home() {
  return (
    <>
    <Hero />
    <AnimeRow address='/popular' title="Popular" url="https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank" />
    <AnimeRow address='/toprated' title="Top rated" url="https://kitsu.io/api/edge/anime?page[limit]=20&sort=-averageRating" />
    <AnimeRow address='/recently' title="Recently" url="https://kitsu.io/api/edge/anime?page[limit]=20&sort=-updatedAt
" />
    <AnimeRow title="Action" address="/genres"
      url="https://kitsu.io/api/edge/anime?filter[categories]=action&page[limit]=20&sort=-averageRating"
    />
    <AnimeRow title="Slice of life" address="/genres"
    url="https://kitsu.io/api/edge/anime?filter[categories]=slice-of-life&page[limit]=20&sort=-averageRating"
  />
    </>
  )
}
