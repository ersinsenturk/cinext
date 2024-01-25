import { HiUserCircle } from "react-icons/hi2";

import Link from "next/link";

const HeaderProfile = () => {
  return (
    <div className="flex gap-4 text-sm md:text-base">
      <Link href="/login" scroll={false}>
        <HiUserCircle className="text-3xl" />
      </Link>
      {/* <Link href="/signup" className="hidden md:block" scroll={false}>
        Create account
      </Link> */}
    </div>
  );
};

export default HeaderProfile;
