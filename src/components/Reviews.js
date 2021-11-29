import { useEffect, useState } from "react";
import { getReviews } from "../Utils/api";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Sort from "./Sort";

export default function Reviews(categories) {
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState("reviews.created_at");
  const [order, setOrder] = useState("desc");

  const { search } = useLocation();

  useEffect(() => {
    getReviews(search, sort, order).then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, [search, sort, order]);

  return (
    <main className="Reviews">
      <h2>Reviews</h2>
      <Sort setSort={setSort} setOrder={setOrder} />
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
