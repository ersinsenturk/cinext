import { HiOutlineHeart } from "react-icons/hi2";
import { HiHeart } from "react-icons/hi2";
import { HiEye } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";

const UserActions = () => {
  const isFavorited = true;
  const isWatchlist = true;

  let favoriteContent;
  if (isFavorited) {
    favoriteContent = (
      <>
        <HiHeart size={42} className="text-color4" />
        <p className="group-hover:hidden">Liked</p>
        <p className="hidden group-hover:block">Remove</p>
      </>
    );
  } else {
    favoriteContent = (
      <>
        <HiOutlineHeart size={42} />
        <p>Like</p>
      </>
    );
  }

  let watchlistContent;
  if (isWatchlist) {
    watchlistContent = (
      <>
        <HiEye size={42} className="text-color4" />
        <p className="group-hover:hidden">Watchlist</p>
        <p className="hidden group-hover:block">Remove</p>
      </>
    );
  } else {
    watchlistContent = (
      <>
        <HiOutlineEye size={42} />
        <p className="">Watchlist</p>
      </>
    );
  }
  return (
    <div className="flex mb-6 pb-6 border-b border-color3">
      <button className="group basis-1/2">
        <div className="flex flex-col items-center group-hover:text-color4">
          {favoriteContent}
        </div>
      </button>
      <button className="group basis-1/2">
        <div className="flex flex-col items-center group-hover:text-color4">
          {watchlistContent}
        </div>
      </button>
    </div>
  );
};

export default UserActions;
