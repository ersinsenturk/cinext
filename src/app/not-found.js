import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2>There is a problem</h2>
      <p>We couldn`t find the page you were looking for.</p>
      <Link href="/" className="link-primary mt-4">
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
