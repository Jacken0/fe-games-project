import { useEffect, useState } from "react";
import { getReviews } from "../Utils/api";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Reviews(categories) {
  const [reviews, setReviews] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    getReviews(search).then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, [search]);

  return (
    <main className="Reviews">
      <h2>Reviews</h2>
      <ul className="Reviews_List">
        {reviews.map((reviewData) => {
          return (
            <li key={reviewData.review_id}>
              <Link to={`/reviews/${reviewData.review_id}`}>
                <img
                  src={reviewData.review_img_url}
                  alt={reviewData.title}
                ></img>
                <h3>{reviewData.title}</h3>
                <p>Author: {reviewData.owner}</p>
                <p>
                  votes: {reviewData.votes} comments: {reviewData.comment_count}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
      <Sidebar categories={categories} />
    </main>
  );
}
