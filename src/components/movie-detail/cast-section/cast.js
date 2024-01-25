import Section from "../section";
import CastItem from "./cast-item";

const Cast = ({ cast }) => {
  return (
    <Section title="Cast">
      <div className="flex flex-wrap gap-2">
        {cast.map((person) => (
          <CastItem person={person} key={person.id} />
        ))}
      </div>
    </Section>
  );
};

export default Cast;
