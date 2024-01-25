import Section from "../section";
import SimilarItem from "./similar-item";

const SimilarMovies = ({ similars }) => {
  return (
    <Section heading="Similar Movies">
      <div className="flex gap-2">
        {similars.map((similar) => (
          <SimilarItem movie={similar} key={similar.id} />
        ))}
      </div>
    </Section>
  );
};

export default SimilarMovies;
