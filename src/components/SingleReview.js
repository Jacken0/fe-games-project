import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../Utils/api";

export default function SingleReview() {
  const { review_id } = useParams();
  const [SingleReview, setSingleReview] = useState({});

  useEffect(() => {
    getSingleReview(Number(review_id)).then((review) => {
      setSingleReview(review);
    });
  }, []);

  return (
    <div>
      <h1>SINGLE REVIEW</h1>
    </div>
  );
}
