import Link from "next/link";
const CastItem = ({ person }) => {
  return (
    <div
      key={person.id}
      className="bg-color5 text-color3 hover:bg-color4 hover:text-color2 text-xs"
    >
      <Link href={`/person/${person.id}`} className="block px-2 py-1">
        {person.name}
      </Link>
    </div>
  );
};

export default CastItem;
