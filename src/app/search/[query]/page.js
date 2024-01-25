import SearchItem from "@/src/components/search/search-item";
import Pagination from "@/src/components/ui/pagination";
import { searchMovies } from "@/src/lib/movies";

const SearchPage = async ({ params, searchParams }) => {
  const pageIndex = searchParams.page || 1;

  const { results, total_pages, total_results } = await searchMovies({
    query: params.query,
    page: pageIndex,
  });

  let content;
  let title;
  if (!results) {
    title = "No results";
    content = <div>There were no matches for your search term.</div>;
  } else {
    const movieWord = total_results === 1 ? "movie" : "movies";
    title = `Found ${total_results} ${movieWord} matching "${params.query}"`;
    content = results.map((result) => (
      <SearchItem item={result} key={result.id} />
    ));
  }
  return (
    <div>
      <h2>{title}</h2>
      <div>{content}</div>
      {total_pages > 1 && (
        <Pagination totalPages={total_pages} pageIndex={pageIndex} />
      )}
    </div>
  );
};

export default SearchPage;
