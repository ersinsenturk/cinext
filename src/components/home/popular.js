import Image from "next/image";
import HomeSection from "./section";
import Link from "next/link";

const PopularMovie = ({ movie }) => {
  return (
    <HomeSection>
      <div className="-mt-4 relative text-center">
        <div className="relative h-[400px] md:h-[700px] md:w-3/4 m-auto">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie[0].poster_path}`}
            alt={movie[0].title}
            fill
            sizes="100vW"
            className="object-cover object-[center_20%]"
          />
          <div className="before:backdrop-shadow w-full h-full"></div>
        </div>
        <div className="absolute bottom-0 md:bottom-12 left-0 right-0 inline-block font-serif text-color1 dark:text-color3 text-2xl md:text-6xl font-extrabold">
          Discover movies.
          <br />
          Save to watch later. <br />
          Share with friends.
          <br />
          <Link
            href="/login"
            className="font-sans !font-bold link-primary md:!text-lg "
            scroll={false}
          >
            Get Started
          </Link>
        </div>
      </div>
    </HomeSection>
  );
};

export default PopularMovie;
