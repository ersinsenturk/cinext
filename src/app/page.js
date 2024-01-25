import Categories from "../components/home/categories";
import NowPlayingMovies from "../components/home/now-playing";
import PopularMovie from "../components/home/popular";
import UpcomingMovies from "../components/home/upcoming";

import {
  fetchPopular,
  fetchNowPlaying,
  fetchUpcoming,
  fetchCategories,
} from "../lib/movies";

export default async function Home() {
  const [popularMovie, nowplayingMovies, upcomingMovies, categories] =
    await Promise.all([
      fetchPopular(),
      fetchNowPlaying(),
      fetchUpcoming(),
      fetchCategories(),
    ]);
  return (
    <>
      <PopularMovie movie={popularMovie} />
      <NowPlayingMovies movies={nowplayingMovies} />
      <UpcomingMovies movies={upcomingMovies} />
      <Categories categories={categories} />
    </>
  );
}
