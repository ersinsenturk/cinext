"use client";
import Image from "next/image";
import { useState } from "react";
const ReviewItem = ({ review }) => {
  const [imgError, setImgError] = useState(false);
  const avatarImg = imgError
    ? "/no-image.png"
    : `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`;
  return (
    <div className="flex items-start gap-4 py-4 border-b">
      <div className="relative aspect-square basis-16 w-16 rounded-full overflow-hidden">
        <Image
          src={avatarImg}
          alt={review.author}
          fill
          sizes="10vW"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="flex-1">
        <p className="text-sm">
          Review by <span className="font-bold">{review.author}</span>
        </p>
        <p className="text-sm md:text-base break-all">{review.content}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
