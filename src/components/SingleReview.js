import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewComments, getSingleReview } from "../Utils/api";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleReview(Number(review_id)).then((review) => {
      setSingleReview(review);
    });
  }, []);
  useEffect(() => {
    getReviewComments(Number(review_id)).then((commentsFromServer) => {
      setComments(commentsFromServer);
    });
  }, []);

  return (
    <div className="SingleReview">
      <review>
        <img src={singleReview.review_img_url} alt={singleReview.title} />
        <h3>{singleReview.title}</h3>
        <h3>Author: {singleReview.owner}</h3>
        <h3>Designer: {singleReview.designer}</h3>
        <p>{singleReview.review_body}</p>
      </review>
      <comments>
        <ul>
          {comments.map((comment) => {
            return (
              <li>
                <h3>{comment.author}</h3>
                <p>{comment.created_at}</p>
                <p>{comment.body}</p>
                <p>{comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </comments>
    </div>
  );
}