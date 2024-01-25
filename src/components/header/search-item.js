"use client";
import { getYear } from "@/src/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SearchItem = ({ item }) => {
  const [imgError, setImgError] = useState();

  return (
    <div className="border hover:bg-white">
      <Link href={`/movie/${item.id}`} className="flex gap-4 items-start p-2">
        <div className="relative basis-1/6 md:basis-1/5 aspect-[3/4]">
          <Image
            src={
              imgError
                ? "/no-image.png"
                : `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
            alt={item.title}
            fill
            sizes="100vW"
            onError={() => setImgError(true)}
          />
        </div>
        <div className="flex-1">
          <p className="font-bold text-color5">{item.title}</p>
          <p className="text-color2 text-sm">{getYear(item.release_date)}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
