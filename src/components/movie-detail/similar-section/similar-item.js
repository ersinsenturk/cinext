import Image from "next/image";
import Link from "next/link";

const SimilarItem = ({ movie }) => {
  return (
    <div className="basis-1/5">
      <Link href={`/movie/${movie.id}`}>
        <div className="relative aspect-[3/4]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="30vW"
          />
        </div>
        <p className="text-xs md:text-base">{movie.title}</p>
      </Link>
    </div>
  );
};

export default SimilarItem;
