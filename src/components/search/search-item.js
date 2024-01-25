import Image from "next/image";
import Link from "next/link";

const SearchItem = ({ item }) => {
  return (
    <Link
      href={`/movie/${item.id}`}
      className="block p-2 md:p-4 border-b dark:border-color3 group"
    >
      <div className="flex gap-4 items-start">
        <div className="relative basis-1/5 md:basis-1/12 aspect-[3/4] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
            fill
            sizes="20vW"
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="basis-4/5 md:basis-11/12">
          <p className="font-bold md:text-xl">{item.title}</p>
          <p className="text-sm md:text-base">{item.overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
