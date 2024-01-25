import MovieItem from "./movie-item";
import HomeSection from "./section";

const NowPlayingMovies = ({ movies }) => {
  return (
    <HomeSection heading="Now Playing">
      <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </HomeSection>
  );
};

export default NowPlayingMovies;
