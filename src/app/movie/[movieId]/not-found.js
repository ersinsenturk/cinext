import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2>Could not find the movie</h2>

      <Link href="/" className="link-primary mt-4">
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
