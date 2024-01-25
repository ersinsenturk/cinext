"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Poster = ({ movie }) => {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) {
          ref.current?.classList.add("sticky");
        }
      },
      { threshold: 0.8 }
    );
    observer.observe(ref.current);
  }, [ref]);

  const averageRate = movie.vote_average.toFixed(1);

  return (
    <div className="top-4" ref={ref}>
      <div className="relative aspect-[3/4]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          fill
          priority
          sizes="30vW"
        />
      </div>
      <div className="mt-2 text-center">
        <span className="font-bold text-3xl text-color5">{averageRate}</span>{" "}
        average rating based on{" "}
        <span className="font-bold">{movie.vote_count}</span> votes
      </div>
    </div>
  );
};

export default Poster;
