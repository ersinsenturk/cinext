import Cast from "@/src/components/movie-detail/cast-section/cast";
import Overview from "@/src/components/movie-detail/overview-section/overview";
import Poster from "@/src/components/movie-detail/poster";
import Reviews from "@/src/components/movie-detail/review-section/reviews";
import SimilarMovies from "@/src/components/movie-detail/similar-section/similar";
import UserActionsSection from "@/src/components/movie-detail/user-actions/section";
import { getYear } from "@/src/lib/helpers";
import {
  fetchMovieCast,
  fetchMovieDetail,
  fetchMovieReviews,
  fetchSimilarMovies,
} from "@/src/lib/movies";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const movie = await fetchMovieDetail({ movieId: params.movieId });
  return {
    title: movie.title,
    metadataBase: new URL("http://localhost:3000"),
    openGraph: {
      title: movie.title,
      url: `http://localhost:3000/movie/${movie.id}`,
      description: "Check this movie!",
      siteName: "ciNext",
      images: [`https://image.tmdb.org/t/p/w500${movie.poster_path}`],
    },
    twitter: {
      title: movie.title,
      description: "Check this movie!",
      images: [`https://image.tmdb.org/t/p/w500${movie.poster_path}`],
    },
  };
}

const MovieDetailPage = async ({ params }) => {
  const { movieId } = params;

  const pagePromises = [
    fetchMovieDetail({ movieId }),
    fetchMovieCast({ movieId }),
    fetchMovieReviews({ movieId }),
    fetchSimilarMovies({ movieId }),
  ];
  const [movie, { cast, directors }, reviews, similars] = await Promise.all(
    pagePromises
  );

  if (movie.success === false) {
    notFound();
  }

  return (
    <div className="grid md:grid-cols-4 gap-4 md:gap-8">
      <div className="md:col-span-1">
        <Poster movie={movie} />
      </div>
      <div className="relative md:col-span-3">
        <div className="flex items-center flex-wrap md:items-end gap-2 mb-6">
          <h2 className="mb-0 leading-none">{movie.title}</h2>
          <span className="font-bold">({getYear(movie.release_date)})</span>
          <span className="flex gap-1">
            <span>Directed by</span>
            {directors.map((director) => (
              <Link
                href={`/person/${director.id}`}
                key={director.id}
                className="text-color5 hover:text-color4"
              >
                {director.name}
              </Link>
            ))}
          </span>
        </div>
        <div className="grid md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-3 order-2 md:order-1">
            <Overview movie={movie} />
            <Cast cast={cast} />
            {reviews.length > 0 && <Reviews reviews={reviews} />}
            {similars.length > 0 && <SimilarMovies similars={similars} />}
          </div>

          <div className="md:col-span-1 order-1 md:order-2">
            <UserActionsSection movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
