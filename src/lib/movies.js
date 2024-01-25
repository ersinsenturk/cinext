const baseUrl = "https://api.themoviedb.org/3";
const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
};

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchNowPlaying = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/now_playing?language=en-US&page=1`,
      getOptions
    );
    const { results } = await response.json();
    const spliceResult = results.splice(0, 8);
    return spliceResult;
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

export const fetchUpcoming = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/upcoming?language=en-US&page=1`,
      getOptions
    );
    const { results } = await response.json();
    const spliceResult = results.splice(0, 8);
    return spliceResult;
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

const randomNum = Math.floor(Math.random() * 20);
export const fetchPopular = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/popular?language=en-US&page=1`,
      getOptions
    );
    const { results } = await response.json();
    const spliceResult = results.splice(randomNum, 1);
    return spliceResult;
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/genre/movie/list?language=en`,
      getOptions
    );
    const { genres } = await response.json();
    return genres;
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

export const searchMovies = async ({ query, page = 1 }) => {
  try {
    const response = await fetch(
      `${baseUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      getOptions
    );

    const { results, total_pages, total_results } = await response.json();
    const sortResults = results.sort((a, b) => b.popularity - a.popularity);
    return { results: sortResults, total_pages, total_results };
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

export const fetchMovieDetail = async ({ movieId }) => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}?language=en-US`,
      getOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

export const fetchMovieCast = async ({ movieId }) => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}/credits?language=en-US`,
      getOptions
    );
    const result = await response.json();
    const cast = result.cast;
    const directors = result.crew.filter((crew) => crew.job === "Director");
    return { cast, directors };
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

export const fetchMovieReviews = async ({ movieId }) => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}/reviews?language=en-US`,
      getOptions
    );
    const { results } = await response.json();
    const sortedResults = results.sort((a, b) => b.created_at - a.created_at);
    const lastResults = sortedResults.splice(0, 5);
    return lastResults;
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

export const fetchSimilarMovies = async ({ movieId }) => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}/similar?language=en-US`,
      getOptions
    );
    const { results } = await response.json();
    const sortedResults = results.sort((a, b) => b.popularity - a.popularity);
    const lastResults = sortedResults.splice(0, 5);
    return lastResults;
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};

export const fetchCategoryMovies = async ({ categoryId, page = 1 }) => {
  try {
    const response = await fetch(
      `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${categoryId}`,
      getOptions
    );

    const { results, total_pages, total_results } = await response.json();

    return { results, total_pages: 20, total_results };
  } catch (error) {
    throw new Error("When fetching an error occured");
  }
};
