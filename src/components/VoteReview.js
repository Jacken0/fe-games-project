import { useState } from "react";
import { patchVotes } from "../Utils/api";

export default function VoteReview({ singleReview }) {
  const [addedVote, setAddedVote] = useState(0);
  console.log(singleReview);

  const handleClick = () => {
    setAddedVote((prevVotes) => prevVotes + 1);
    patchVotes(singleReview.review_id, 1).catch(() => {
      setAddedVote((prevVotes) => prevVotes - 1);
    });
  };

  return (
    <button onClick={handleClick}>{singleReview.votes + addedVote}</button>
  );
}
