import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Search from "./components/Search"
import Logo from "./components/Logo"
import NumResults from "./components/NumResults"
import ListBox from "./components/ListBox"
import WatchedBox from "./components/WatchedBox"
import MovieList from "./components/MovieList"
import WatchedSummary from "./components/WatchedSummary"
import WatchedMovieList from "./components/WatchedMovieList"
import Loader from "./components/Loader"
import ErrorMessage from "./components/ErrorMessage"
import MovieDetails from "./components/MovieDetails"
import { useMovies } from "./components/useMovies"
import { useLocalStorageState } from "./components/useLocalStorageState"

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
]

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
]

export const KEY = "fff65370"

export default function App() {
  const [query, setQuery] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  const [watched, setWatched] = useLocalStorageState([])

  const handleSelectMovie = (id) => {
    setSelectedId(selectedId === id ? null : id)
  }

  const handleCloseMovie = () => {
    setSelectedId(null)
  }

  const handleAddWatched = (movie) => {
    setWatched((curWatched) => [...curWatched, movie])
  }

  const handleRemoveMovie = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id))
  }

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie)

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        {isLoading && <Loader />}

        {!isLoading && !error && (
          <ListBox>
            <MovieList
              movieData={tempMovieData}
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          </ListBox>
        )}
        {error && <ErrorMessage message={error} />}

        <WatchedBox>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onRemoveMovie={handleRemoveMovie}
              />
            </>
          )}
        </WatchedBox>
      </Main>
    </>
  )
}
