import WatchedMovie from "./WatchedMovie"

const WatchedMovieList = ({ watched, onRemoveMovie }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onRemoveMovie={onRemoveMovie}
        />
      ))}
    </ul>
  )
}

export default WatchedMovieList
