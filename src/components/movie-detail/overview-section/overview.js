import Link from "next/link";
import Section from "../section";

const Overview = ({ movie }) => {
  return (
    <Section>
      <div className="flex gap-2 ">
        {movie.genres.map((genre) => (
          <Link
            href={`/category/${genre.id}`}
            key={genre.id}
            className="text-color5 hover:text-color4"
          >
            {genre.name}
          </Link>
        ))}
      </div>
      <p className="mb-4">{movie.runtime} mins</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
    </Section>
  );
};

export default Overview;
