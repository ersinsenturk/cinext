import Link from "next/link";
import HomeSection from "./section";

const Categories = ({ categories }) => {
  return (
    <HomeSection heading="Categories">
      <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="text-center ">
            <Link
              href={`/category/${category.id}`}
              className="block bg-color5 hover:bg-color4 text-color3 hover:text-color2 transition-all duration-300 p-4 font-bold text-xs md:text-lg"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </HomeSection>
  );
};

export default Categories;
