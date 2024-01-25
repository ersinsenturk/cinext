import Section from "../section";
import ReviewItem from "./review-item";

const Reviews = ({ reviews }) => {
  return (
    <Section heading="Reviews">
      <div className="flex flex-col">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </div>
    </Section>
  );
};

export default Reviews;
