"use client";
import Link from "next/link";

const Pagination = ({ totalPages, pageIndex }) => {
  return (
    <div className="flex justify-center p-4">
      <ul className="flex gap-4 justify-center flex-wrap">
        {Array(totalPages)
          .fill(null)
          .map((_, i) => (
            <li
              key={i}
              className={Number(pageIndex) === i + 1 ? "text-color5" : null}
            >
              <Link href={`?page=${i + 1}`}>{i + 1}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
