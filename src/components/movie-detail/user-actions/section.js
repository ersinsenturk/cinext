import UserActions from "./actions";
import UserRate from "./rate";
import Share from "./share";

const UserActionsSection = ({ movie }) => {
  return (
    <div className="p-4 text-center bg-color2 dark:bg-color1 text-color3 rounded-md">
      <UserActions />
      <UserRate />
      <Share movie={movie} />
    </div>
  );
};

export default UserActionsSection;
