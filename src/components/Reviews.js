import { useEffect, useState } from "react";
import { getReviews } from "../Utils/api";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, []);

  console.log(reviews);
  return (
    <main className="Reviews">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((reviewData) => {
          return (
            <li key={reviewData.review_id}>
              <img src={reviewData.review_img_url} alt={reviewData.title}></img>
              <h3>{reviewData.title}</h3>
              <p>Author: {reviewData.owner}</p>
              <p>
                votes: {reviewData.votes} comments: {reviewData.comment_count}
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
