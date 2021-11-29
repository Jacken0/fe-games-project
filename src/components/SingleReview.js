import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewComments, getSingleReview } from "../Utils/api";
import AddComment from "./AddComment";
import VoteReview from "./VoteReview";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleReview(Number(review_id)).then((review) => {
      setSingleReview(review);
    });
  }, [review_id]);

  useEffect(() => {
    getReviewComments(Number(review_id)).then((commentsFromServer) => {
      setComments(commentsFromServer);
    });
  }, [comments, review_id]);

  return (
    <div className="SingleReview">
      <div>
        <img src={singleReview.review_img_url} alt={singleReview.title} />
        <h3>{singleReview.title}</h3>
        <h3>Author: {singleReview.owner}</h3>
        <h3>Designer: {singleReview.designer}</h3>
        <p>{singleReview.review_body}</p>
        <VoteReview singleReview={singleReview} />
      </div>
      <div className="ReviewComments">
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p>{comment.created_at}</p>
                <p>{comment.body}</p>
                <p>{comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <AddComment review_id={review_id} setComments={setComments} />
    </div>
  );
}
