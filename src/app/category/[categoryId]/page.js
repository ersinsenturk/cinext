import MovieItem from "@/src/components/home/movie-item";
import Pagination from "@/src/components/ui/pagination";
import { fetchCategories, fetchCategoryMovies } from "@/src/lib/movies";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const categories = await fetchCategories();
  const { name } = categories.find(
    (cat) => cat.id === Number(params.categoryId)
  );
  return {
    title: `${name} Movies`,
  };
}

const CategoryPage = async ({ params, searchParams }) => {
  const { categoryId } = params;
  const pageIndex = searchParams.page || 1;

  const pagePromises = [
    fetchCategoryMovies({ categoryId, page: pageIndex }),
    fetchCategories(),
  ];

  const [{ results: movies, total_pages, total_results }, categories] =
    await Promise.all(pagePromises);

  const { name: categoryTitle } = categories.find(
    (cat) => cat.id === Number(categoryId)
  );

  return (
    <div>
      <h2 className="text-center mb-6">{categoryTitle} Movies</h2>
      <div className="grid gap-4 grid-cols-4 md:grid-cols-10">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      {total_pages > 1 && (
        <Pagination totalPages={total_pages} pageIndex={pageIndex} />
      )}
    </div>
  );
};

export default CategoryPage;
