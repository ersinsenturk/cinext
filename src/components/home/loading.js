import Spinner from "../ui/spinner";

const HomePageLoading = () => {
  return (
    <div>
      <Spinner />
      {/* <div className="grid grid-cols-8 gap-4 mb-6">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="h-48">
              <div className="skeleton" />
            </div>
          ))}
      </div>
      <div className="grid grid-cols-8 gap-4">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="h-48">
              <div className="skeleton" />
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default HomePageLoading;
