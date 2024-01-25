"use client";
import { HiLink } from "react-icons/hi2";
import {
  TwitterShareButton,
  FacebookShareButton,
  XIcon,
  FacebookIcon,
} from "react-share";

const Share = ({ movie }) => {
  const movieUrl = `http://localhost:3000/movie/${movie.id}`;

  const handleCopyclipboard = () => {
    navigator.clipboard.writeText(movieUrl);
  };
  return (
    <div>
      <p className="font-bold text-lg">Share</p>
      <div
        className="flex items-end justify-center gap-2 cursor-pointer"
        onClick={handleCopyclipboard}
      >
        <span className="text-xs">{movieUrl}</span>
        <span>
          <HiLink size={20} />
        </span>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <TwitterShareButton
          title={movie.title}
          url={`http://localhost:3000/movie/${movie.id}`}
        >
          <XIcon size={32} bgStyle={{ fill: "darkgray" }} />
        </TwitterShareButton>
        <FacebookShareButton
          title={movie.title}
          url={`http://localhost:3000/movie/${movie.id}`}
        >
          <FacebookIcon size={32} bgStyle={{ fill: "darkgray" }} />
        </FacebookShareButton>
      </div>
    </div>
  );
};

export default Share;
