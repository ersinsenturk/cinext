import Image from "next/image";
import Link from "next/link";

const MovieItem = ({ movie }) => {
  return (
    <div data-id={movie.id}>
      <Link href={`/movie/${movie.id}`} className="group block">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            sizes="33vw"
            fill
            alt={movie.title}
            className="object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <p className="font-bold text-xs md:text-base mt-1 group-hover:text-color1 dark:group-hover:text-white">
          {movie.title}
        </p>
      </Link>
    </div>
  );
};

export default MovieItem;
